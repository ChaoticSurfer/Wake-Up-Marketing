import { blogFeedXml } from "@/lib/blog-routes";

// Built once per deploy: the feed only changes when a post ships.
export const dynamic = "force-static";

export function GET() {
  return new Response(blogFeedXml("ka"), { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
