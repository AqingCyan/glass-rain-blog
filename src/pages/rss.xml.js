import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function get() {
  return rss({
    title: '野火 | Blog',
    description: '野火 Blog',
    site: 'https://www.glassrain.live',
    items: [...(await pagesGlobToRssItems(import.meta.glob('./record/*.{md,mdx}')))],
    customData: `<language>zh-CN</language>`,
  })
}
