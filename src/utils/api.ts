import { Category, NewsDataArticle, NewsResponse } from '@/types';

export async function fetchNews(
  category: Category
): Promise<NewsResponse> {
  // Get API key from environment variable
  const apiKey = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY || process.env.NEXT_PUBLIC_NEWS_API_KEY;
  
  if (!apiKey) {
    throw new Error('NewsData API key not found in environment variables');
  }
  
  const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&category=${category}&language=en&country=us`;
  
  const response = await fetch(url, { next: { revalidate: 3600 } });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch news: ${response.statusText}`);
  }
  
  const data = await response.json();
  
  // Transform the response to match our app's expected format
  const transformedData: NewsResponse = {
    status: data.status,
    totalResults: data.totalResults || 0,
    articles: data.results ? data.results.map((article: NewsDataArticle) => ({
      source: {
        id: article.source_id,
        name: article.source_id || "Unknown Source"
      },
      author: article.creator ? article.creator.join(", ") : null,
      title: article.title,
      description: article.description,
      url: article.link,
      urlToImage: article.image_url,
      publishedAt: article.pubDate,
      content: article.content
    })) : []
  };
  
  return transformedData;
} 