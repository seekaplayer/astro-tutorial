import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET() {
  return rss({
    title: "Astro Blog",
    description: "My Journey Learning Astro",
    site: "https://blog.astro.build",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customdata: "<language>en</language>",
  });
}
