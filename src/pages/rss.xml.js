import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET() {
  return rss({
    title: "Astro Blog",
    description: "My Journey Learning Astro",
    site: "https://astro-tutorial-tau.vercel.app/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customdata: "<language>en</language>",
  });
}
