// Tells Bing, Yandex and the other IndexNow engines about URLs in the live sitemap.
//   node scripts/indexnow.mjs                    every URL (after a production deploy)
//   node scripts/indexnow.mjs --since-hours 5    only URLs whose <lastmod> is within the last 5 hours
//                                                (the scheduled run that announces posts as they go live)
// The key is public by design: engines verify it at https://wakeup.ge/<key>.txt (public/<key>.txt).

const SITE = "https://wakeup.ge";
const INDEXNOW_KEY = "5b4428deb04661a5722e00f2a9bc4994";

const sinceArg = process.argv.indexOf("--since-hours");
const sinceHours = sinceArg === -1 ? null : Number(process.argv[sinceArg + 1]);
if (sinceHours !== null && !(sinceHours > 0)) throw new Error("--since-hours needs a positive number");

const fetchSitemap = async () => {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  return res.text();
};

let xml = await fetchSitemap();
if (sinceHours !== null) {
  // The sitemap is rebuilt hourly in the background: the first request can get the previous copy and starts the
  // rebuild, so read it again once the rebuild has had time to finish.
  await new Promise((resolve) => setTimeout(resolve, 30_000));
  xml = await fetchSitemap();
}

const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
  loc: m[1].match(/<loc>(.*?)<\/loc>/)?.[1],
  lastmod: m[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1],
}));
if (entries.length === 0) throw new Error("Sitemap has no URLs");

const cutoff = sinceHours === null ? null : Date.now() - sinceHours * 3_600_000;
const urlList = entries
  .filter((e) => cutoff === null || (e.lastmod && Date.parse(e.lastmod) >= cutoff))
  .map((e) => e.loc);
if (urlList.length === 0) {
  console.log(`IndexNow: no URLs changed in the last ${sinceHours} hours, nothing to submit`);
  process.exit(0);
}

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
console.log(`IndexNow: submitted ${urlList.length} URLs (${res.status})${sinceHours === null ? "" : `: ${urlList.join(" ")}`}`);
