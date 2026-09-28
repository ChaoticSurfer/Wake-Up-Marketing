import type { NextConfig } from "next";

const isExport = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Static export: every version becomes a flat <slug>.html next to index.html,
  // with relative asset paths so the site works from any folder or host.
  output: "export",
  images: { unoptimized: true },
  assetPrefix: isExport ? "." : undefined,
};

export default nextConfig;
