import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
];

// Pages from the previous WordPress site that still have Google impressions (Search Console, 16 months),
// sent to their closest page on this site. Old blog posts with no equivalent are left to 404.
const oldSiteRedirects = [
  { source: "/contacts", destination: "/contact" },
  { source: "/about-us", destination: "/" },
  { source: "/portfolio-grid", destination: "/" },
  { source: "/blog-grid", destination: "/" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // English and Georgian have separate root layouts (for <html lang>), so the 404 for unknown URLs
  // comes from app/global-not-found.tsx; Next.js still marks that file convention experimental.
  experimental: { globalNotFound: true },
  redirects() {
    return oldSiteRedirects.map((r) => ({ ...r, permanent: true }));
  },
  headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
