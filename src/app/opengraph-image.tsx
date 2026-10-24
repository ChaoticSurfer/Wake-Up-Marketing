import { ImageResponse } from "next/og";
import { hero } from "@/lib/content";
import { SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME}: ${hero.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#111111", color: "#ffffff" }}>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 800 }}>
          Wake<span style={{ color: "#E40613" }}>UP</span>&nbsp;Marketing
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, maxWidth: 980 }}>{hero.headline}</div>
          <div style={{ marginTop: 28, fontSize: 30, color: "rgba(255,255,255,0.65)" }}>{hero.eyebrow}</div>
        </div>
        <div style={{ display: "flex", height: 10, width: 160, background: "#E40613" }} />
      </div>
    ),
    size,
  );
}
