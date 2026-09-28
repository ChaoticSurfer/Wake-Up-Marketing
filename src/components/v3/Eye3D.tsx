"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";

/**
 * 3D eyeball made of QR modules: instanced cubes on a sphere. The front cap is the red
 * "iris" with white finder squares, the pupil is a black void, and the whole eye turns
 * toward the cursor.
 */

const N = 5200;
const RADIUS = 1.6;
const IRIS = 0.72; // radians from the front axis
const PUPIL = 0.3;

type Mod = { pos: THREE.Vector3; kind: "sclera" | "iris" | "finder"; on: boolean };

function buildModules(): Mod[] {
  const mods: Mod[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  // finder centres in (theta, phi) around the front axis
  const finders = [
    [0.5, Math.PI * 0.75],
    [0.5, Math.PI * 0.25],
    [0.5, Math.PI * 1.25],
  ];
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const th = golden * i;
    const pos = new THREE.Vector3(Math.cos(th) * r, y, Math.sin(th) * r).multiplyScalar(RADIUS);
    const n = pos.clone().normalize();
    const ang = Math.acos(n.z); // angle from +z (front)
    if (ang < PUPIL) continue;
    const phi = Math.atan2(n.y, n.x) + Math.PI;
    let kind: Mod["kind"] = ang < IRIS ? "iris" : "sclera";
    let on = Math.random() < (kind === "iris" ? 0.72 : 0.55);
    for (const [ft, fp] of finders) {
      const dt = Math.abs(ang - ft);
      let dp = Math.abs(phi - fp);
      dp = Math.min(dp, Math.PI * 2 - dp) * Math.sin(ang);
      if (dt < 0.09 && dp < 0.09) {
        kind = "finder";
        on = !(dt < 0.06 && dp < 0.06) || (dt < 0.03 && dp < 0.03);
      }
    }
    mods.push({ pos, kind, on });
  }
  return mods;
}

/** Imperative instanced-mesh driver, kept outside React's render model. */
function createSim(mesh: THREE.InstancedMesh) {
  const mods = buildModules();
  const dummy = new THREE.Object3D();
  const colors = { sclera: new THREE.Color("#f2f2f2"), iris: new THREE.Color("#e40613"), finder: new THREE.Color("#ffffff") };
  let intro = 0;
  let lastFlick = 0;
  const place = (i: number, s: number) => {
    const m = mods[i];
    dummy.position.copy(m.pos);
    dummy.lookAt(0, 0, 0);
    const size = m.kind === "sclera" ? 0.042 : 0.048;
    dummy.scale.setScalar(m.on ? size * s : 0.0001);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  };
  mesh.count = mods.length;
  mods.forEach((m, i) => {
    place(i, 0.001);
    mesh.setColorAt(i, colors[m.kind]);
  });
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;

  return (t: number, dt: number) => {
    if (intro < 1) {
      intro = Math.min(1, intro + dt / 1.4);
      const e = 1 - Math.pow(1 - intro, 4);
      for (let i = 0; i < mods.length; i++) place(i, e);
      mesh.instanceMatrix.needsUpdate = true;
      return;
    }
    if (t - lastFlick > 0.08) {
      lastFlick = t;
      for (let k = 0; k < 18; k++) {
        const i = (Math.random() * mods.length) | 0;
        if (mods[i].kind === "finder") continue;
        mods[i].on = !mods[i].on;
        place(i, 1);
      }
      mesh.instanceMatrix.needsUpdate = true;
    }
  };
}

function Eyeball() {
  const group = useRef<THREE.Group>(null);
  const inst = useRef<THREE.InstancedMesh>(null);
  const step = useRef<((t: number, dt: number) => void) | null>(null);

  useLayoutEffect(() => {
    if (inst.current) step.current = createSim(inst.current);
  }, []);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const { x, y } = state.pointer;
    const t = state.clock.elapsedTime;
    const tx = -y * 0.32 + Math.sin(t * 0.4) * 0.05;
    const ty = x * 0.5 + Math.sin(t * 0.3) * 0.08;
    g.rotation.x += (tx - g.rotation.x) * 0.06;
    g.rotation.y += (ty - g.rotation.y) * 0.06;
    step.current?.(t, dt);
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[RADIUS * 0.97, 64, 64]} />
        <meshStandardMaterial color="#0b0b0b" roughness={0.35} metalness={0.2} />
      </mesh>
      <instancedMesh ref={inst} args={[undefined, undefined, N]}>
        <boxGeometry args={[1, 1, 0.6]} />
        <meshStandardMaterial roughness={0.4} metalness={0.1} emissive="#e40613" emissiveIntensity={0.18} />
      </instancedMesh>
      {/* pupil ring + highlight */}
      <mesh position={[0, 0, RADIUS * Math.cos(PUPIL) + 0.01]}>
        <ringGeometry args={[RADIUS * Math.sin(PUPIL) * 0.96, RADIUS * Math.sin(PUPIL) * 1.04, 64]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.16, 0.18, RADIUS * 0.985]}>
        <sphereGeometry args={[0.08, 24, 24]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

export default function Eye3D({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={1.6} />
        <pointLight position={[-3, -2, 3]} intensity={30} color="#e40613" />
        <Eyeball />
      </Canvas>
    </div>
  );
}
