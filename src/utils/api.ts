import { Category, Country, NewsResponse } from '@/types';

export async function fetchNews(
  category: Category,
  country: Country
): Promise<NewsResponse> {
  // Try to get from environment variable first
  let apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  
  // Fallback to hardcoded key for development
  if (!apiKey) {
    apiKey = '3983c8da8fe9436faf2ab73372ae765a';
    console.log('Using fallback API key');
  }

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
  
  const response = await fetch(url, { next: { revalidate: 3600 } });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch news: ${response.statusText}`);
  }
  
  return response.json();
} 