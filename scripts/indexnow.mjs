// Tells Bing, Yandex and the other IndexNow engines about every URL in the live sitemap.
// Run after a production deploy: node scripts/indexnow.mjs
// The key is public by design: engines verify it at https://wakeup.ge/<key>.txt (public/<key>.txt).

const SITE = "https://wakeup.ge";
const INDEXNOW_KEY = "5b4428deb04661a5722e00f2a9bc4994";

const sitemap = await fetch(`${SITE}/sitemap.xml`);
if (!sitemap.ok) throw new Error(`Sitemap fetch failed: ${sitemap.status}`);
const urlList = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
if (urlList.length === 0) throw new Error("Sitemap has no URLs");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
    urlList,
  }),
});
// 200 = accepted, 202 = accepted while the key is still being verified.
if (res.status !== 200 && res.status !== 202) {
  throw new Error(`IndexNow rejected the submission: ${res.status} ${await res.text()}`);
}
console.log(`IndexNow: submitted ${urlList.length} URLs (${res.status})`);
