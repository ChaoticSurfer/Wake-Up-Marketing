import { blogFeedXml } from "@/lib/blog-routes";

// Rebuilt hourly so a scheduled post joins the feed within an hour of its publish time.
export const revalidate = 3600;

export function GET() {
  return new Response(blogFeedXml("ka"), { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
