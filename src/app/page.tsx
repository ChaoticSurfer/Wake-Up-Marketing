import { versionHref, versions } from "@/lib/versions";

export default function DesignLab() {
  return (
    <main className="min-h-screen bg-wu-black px-4 pb-24 pt-10 text-white md:px-8">
      <div className="mx-auto max-w-[1320px]">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="brand/logo-horizontal-light.png" alt="WakeUP Marketing" className="h-8 w-auto" />
          <p className="hud-label text-white/45">
            Design Lab · {versions.length} direction{versions.length > 1 ? "s" : ""}
          </p>
        </header>

        <section className="py-14 md:py-20">
          <p className="hud-label text-wu-red">Pick a direction</p>
          <h1 className="mt-4 max-w-[900px] font-display text-[clamp(44px,7vw,110px)]">
            One brand. <span className="text-outline text-white/80">Several</span> futures.
          </h1>
          <p className="mt-6 max-w-[560px] text-lg text-white/55">
            Each version is a complete homepage built on the same content and brand kit. Open one, scroll the whole page, and use the
            Lab pill in the bottom-left corner to jump between them.
          </p>
        </section>

        <ol className="grid gap-5 md:grid-cols-2">
          {versions.map((v) => (
            <li key={v.slug}>
              <a
                href={versionHref(v.slug)}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-wu-ink transition-all duration-500 hover:-translate-y-1 hover:border-wu-red/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#161616]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`lab/${v.slug}.jpg`}
                    alt={`${v.name} homepage preview`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {v.status === "flagship" && (
                    <span className="hud-label absolute left-4 top-4 rounded-full bg-wu-red px-3 py-1.5 !text-[10px]">Flagship</span>
                  )}
                </div>
                <div className="flex items-end justify-between gap-6 p-6">
                  <div>
                    <p className="hud-label !text-[10px] text-white/45">
                      <span className="text-wu-red">{v.slug.toUpperCase()}</span> · {v.tagline}
                    </p>
                    <h2 className="mt-2 font-display text-4xl">{v.name}</h2>
                    <p className="mt-2 max-w-[440px] text-[15px] text-white/55">{v.direction}</p>
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-white/15 transition-all group-hover:border-wu-red group-hover:bg-wu-red">
                    →
                  </span>
                </div>
              </a>
            </li>
          ))}
          {versions.length < 2 && (
            <li className="grid min-h-[300px] place-items-center rounded-2xl border border-dashed border-white/15 p-8 text-center">
              <p className="hud-label text-white/40">
                More directions in progress
                <br />
                <span className="text-white/25">{String(versions.length + 1).padStart(2, "0")} / Editorial · Spatial · Terminal</span>
              </p>
            </li>
          )}
        </ol>
      </div>
    </main>
  );
}
