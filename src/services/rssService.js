import { parseStringPromise } from 'xml2js';

const feeds = [
    'http://feeds.bbci.co.uk/news/rss.xml',
    'http://rss.cnn.com/rss/edition.rss',
    'https://www.npr.org/rss/rss.php?id=1001',
    'https://feeds.nytimes.com/nyt/rss/HomePage',
    'https://feeds.a.dj.com/rss/RSSWorldNews.xml',
    'https://feeds.reuters.com/reuters/worldNews',
    'https://www.aljazeera.com/xml/rss/all.xml',
  ];

async function fetchFeed(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    return parseStringPromise(text);
  } catch (err) {
    console.error(`Failed to fetch ${url}: ${err.message}`);
    return null;
  }
}

export async function getAllNews() {
  let allNews = [];

  for (const url of feeds) {
    const data = await fetchFeed(url);
    if (!data) continue;
    const items = data?.rss?.channel[0]?.item || [];

    items.forEach(item => {
      allNews.push({
        title: item.title?.[0] ?? 'No title',
        link: item.link?.[0] ?? '#',
        pubDate: item.pubDate?.[0] ?? new Date().toISOString(),
        description: item.description?.[0] ?? '',
        source: new URL(url).hostname
      });
    });
  }

  // Sort descending by date
  allNews.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  return allNews;
}
