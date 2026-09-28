"use client";

import { useEffect, useRef } from "react";

/** Full-screen WebGL "liquid signal": domain-warped noise in brand red on black. No library. */
const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
void main(){
  vec2 uv=(gl_FragCoord.xy-.5*uRes)/uRes.y;
  vec2 m=(uMouse-.5)*vec2(uRes.x/uRes.y,1.);
  float t=uTime*.06;
  vec2 q=vec2(fbm(uv*1.6+t),fbm(uv*1.6-t+3.1));
  vec2 r=vec2(fbm(uv*1.4+2.*q+vec2(1.7,9.2)+t*1.3),fbm(uv*1.4+2.*q+vec2(8.3,2.8)-t));
  float f=fbm(uv*1.2+2.4*r);
  float glow=smoothstep(.55,.95,f)*1.2;
  float d=length(uv-m*.35);
  glow+=.25*exp(-d*3.);
  vec3 red=vec3(.894,.024,.075);
  vec3 col=mix(vec3(.043),red*.55,smoothstep(.35,.9,f));
  col+=red*glow*.8;
  col+=vec3(1.)*pow(smoothstep(.82,1.,f),6.)*.35;
  float vig=smoothstep(1.25,.2,length(uv));
  col*=.35+.65*vig;
  gl_FragColor=vec4(col,1.);
}`;
const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;

export default function ShaderBg({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas?.getContext("webgl", { antialias: false, alpha: false });
    if (!canvas || !gl) return;
    const sh = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uMouse = gl.getUniformLocation(prog, "uMouse");
    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    const onMove = (e: PointerEvent) => {
      mouse.tx = e.clientX / window.innerWidth;
      mouse.ty = 1 - e.clientY / window.innerHeight;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    const resize = () => {
      const s = 0.5; // render at half resolution — it's a soft background
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * s));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * s));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const t0 = performance.now();
    const frame = (t: number) => {
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      gl.uniform1f(uTime, (t - t0) / 1000 + 20);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduced) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduced) raf = requestAnimationFrame(frame);
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);
  return <canvas ref={ref} className={`h-full w-full ${className}`} aria-hidden />;
}
