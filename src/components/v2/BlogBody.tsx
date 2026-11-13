// Server components: post text renders to HTML on the server and never ships in client JavaScript.
import type { ReactNode } from "react";
import { LocalizedChat } from "@/components/shared/LocalizedChat";
import { AwContact, AwNav } from "@/components/v2/Awaken";
import { Breadcrumbs } from "@/components/v2/ServicePageBody";
import { blogAuthorPath, blogChrome, blogIndexPath, formatPostDate, postPath, relatedPosts } from "@/lib/blog";
import type { BlogBlock, BlogPost } from "@/lib/blog";
import type { Locale } from "@/lib/copy";
import { servicePages, servicePath } from "@/lib/service-pages";

const homePath: Record<Locale, string> = { en: "/", ka: "/ka" };
const link = "text-wu-red underline decoration-wu-red/40 underline-offset-4 hover:text-white";

/** Text with inline links written as [anchor](href). */
function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  for (const m of text.matchAll(pattern)) {
    parts.push(text.slice(last, m.index));
    parts.push(
      <a key={m.index} href={m[2]} className={link}>
        {m[1]}
      </a>,
    );
    last = m.index + m[0].length;
  }
  parts.push(text.slice(last));
  return <>{parts}</>;
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-12 font-display text-3xl leading-tight">{block.text}</h2>;
    case "p":
      return (
        <p className="mt-5 text-lg leading-relaxed text-white/75">
          <Inline text={block.text} />
        </p>
      );
    case "ul":
    case "ol": {
      const List = block.type;
      return (
        <List className={`mt-5 grid gap-2 pl-6 text-lg text-white/75 ${block.type === "ul" ? "list-disc" : "list-decimal"} marker:text-wu-red`}>
          {block.items.map((item) => (
            <li key={item}>
              <Inline text={item} />
            </li>
          ))}
        </List>
      );
    }
    case "table":
      return (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[520px] text-left text-white/75">
            <thead className="bg-[#141414] text-white">
              <tr>
                {block.head.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")} className="border-t border-white/10">
                  {row.map((cell, i) => (
                    <td key={i} className="px-4 py-3 align-top">
                      <Inline text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

function PostList({ posts, locale }: { posts: BlogPost[]; locale: Locale }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {posts.map((p) => (
        <li key={p.slug}>
          <a href={postPath(p)} className="block h-full rounded-2xl border border-white/10 bg-[#141414] p-7 transition-colors hover:border-wu-red/60">
            <time dateTime={p.publishedAt} className="font-mono text-xs text-white/50">
              {formatPostDate(p.publishedAt, locale)}
            </time>
            <h2 className="mt-3 font-display text-2xl leading-tight">{p.title}</h2>
            <p className="mt-3 text-white/60">{p.description}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Page({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-wu-black text-white">
      <AwNav />
      <main className="pt-16">
        {children}
        <AwContact />
      </main>
      <LocalizedChat />
    </div>
  );
}

export function BlogIndexBody({ locale, posts }: { locale: Locale; posts: BlogPost[] }) {
  const ui = blogChrome[locale];
  return (
    <Page>
      <section className="mx-auto max-w-[1120px] px-4 pt-14 md:px-8">
        <Breadcrumbs trail={[{ name: ui.home, href: homePath[locale] }, { name: ui.blog }]} />
        <h1 className="mt-8 font-display text-[clamp(38px,6vw,80px)] leading-[0.95]">{ui.indexH1}</h1>
        <p className="mt-6 max-w-[680px] text-lg text-white/70">{ui.indexIntro}</p>
      </section>
      <div className="mx-auto max-w-[1120px] px-4 py-16 md:px-8">
        <PostList posts={posts} locale={locale} />
      </div>
    </Page>
  );
}

export function BlogAuthorBody({ locale, posts }: { locale: Locale; posts: BlogPost[] }) {
  const ui = blogChrome[locale];
  return (
    <Page>
      <section className="mx-auto max-w-[1120px] px-4 pt-14 md:px-8">
        <Breadcrumbs trail={[{ name: ui.home, href: homePath[locale] }, { name: ui.blog, href: blogIndexPath(locale) }, { name: ui.authorName }]} />
        <h1 className="mt-8 font-display text-[clamp(38px,6vw,80px)] leading-[0.95]">{ui.authorName}</h1>
        <p className="mt-6 max-w-[680px] text-lg text-white/70">{ui.authorIntro}</p>
      </section>
      <section className="mx-auto max-w-[1120px] px-4 py-16 md:px-8">
        <h2 className="mb-6 font-display text-3xl">{ui.authorPosts}</h2>
        <PostList posts={posts} locale={locale} />
      </section>
    </Page>
  );
}

export function BlogPostBody({ post }: { post: BlogPost }) {
  const ui = blogChrome[post.locale];
  const service = servicePages[post.service][post.locale];
  const related = relatedPosts(post).slice(0, 4);
  return (
    <Page>
      <article className="mx-auto max-w-[760px] px-4 pt-14 md:px-8">
        <Breadcrumbs trail={[{ name: ui.home, href: homePath[post.locale] }, { name: ui.blog, href: blogIndexPath(post.locale) }, { name: post.title }]} />
        <h1 className="mt-8 font-display text-[clamp(34px,5vw,64px)] leading-[1]">{post.title}</h1>
        <p className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/55">
          <span>
            {ui.by}{" "}
            <a href={blogAuthorPath(post.locale)} rel="author" className="text-white/80 hover:text-white">
              {ui.authorName}
            </a>
          </span>
          <span>
            {ui.published} <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt, post.locale)}</time>
          </span>
          {post.updatedAt.slice(0, 10) !== post.publishedAt.slice(0, 10) && (
            <span>
              {ui.updated} <time dateTime={post.updatedAt}>{formatPostDate(post.updatedAt, post.locale)}</time>
            </span>
          )}
        </p>
        <div className="mt-6">
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#141414] p-7 sm:flex-row sm:items-center sm:justify-between">
          <a href={servicePath(post.service, post.locale)} className={`text-lg ${link}`}>
            {ui.serviceLink}: {service.name} →
          </a>
          <a href={servicePath("audit", post.locale)} className="inline-flex h-12 items-center justify-center rounded-full bg-wu-red px-6 font-semibold">
            {ui.cta} →
          </a>
        </div>
      </article>
      {related.length > 0 && (
        <section className="mx-auto max-w-[1120px] px-4 pt-20 md:px-8">
          <h2 className="mb-6 font-display text-3xl">{ui.related}</h2>
          <PostList posts={related} locale={post.locale} />
        </section>
      )}
    </Page>
  );
}
