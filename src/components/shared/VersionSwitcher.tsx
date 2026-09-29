import { hubHref, versionHref, versions } from "@/lib/versions";
import { cn } from "@/lib/utils";

/** Floating "Design Lab" pill to hop between design versions. Plain links so it works in the static export. */
export default function VersionSwitcher({ current, light = false }: { current: string; light?: boolean }) {
  const i = versions.findIndex((v) => v.slug === current);
  const v = versions[i];
  const prev = versions[(i - 1 + versions.length) % versions.length];
  const next = versions[(i + 1) % versions.length];
  const btn = cn(
    "grid size-8 place-items-center rounded-full transition-colors",
    light ? "hover:bg-black/10" : "hover:bg-white/10",
  );
  return (
    <nav
      aria-label="Design versions"
      className={cn(
        "fixed bottom-4 left-4 z-[70] flex items-center gap-1 rounded-full border p-1 pr-2 shadow-2xl backdrop-blur-xl",
        light ? "border-black/10 bg-white/80 text-black" : "border-white/15 bg-black/70 text-white",
      )}
    >
      <a
        href={hubHref()}
        title="All designs"
        className={cn("hud-label flex h-8 items-center gap-2 rounded-full px-3 text-xs transition-colors", light ? "hover:bg-black/10" : "hover:bg-white/10")}
      >
        <span className="grid grid-cols-2 gap-[2px]" aria-hidden>
          {[0, 1, 2, 3].map((k) => (
            <i key={k} className={cn("size-[5px]", k === 3 ? "bg-wu-red" : light ? "bg-black" : "bg-white")} />
          ))}
        </span>
        Lab
      </a>
      {versions.length > 1 && (
        <a href={versionHref(prev.slug)} className={btn} aria-label={`Previous design: ${prev.name}`}>
          ←
        </a>
      )}
      <span className="hud-label text-xs px-1 whitespace-nowrap">
        <span className="text-wu-red">{v.slug.toUpperCase()}</span> · {v.name}
      </span>
      {versions.length > 1 && (
        <a href={versionHref(next.slug)} className={btn} aria-label={`Next design: ${next.name}`}>
          →
        </a>
      )}
    </nav>
  );
}
