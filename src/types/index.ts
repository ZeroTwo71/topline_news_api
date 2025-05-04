export type NewsArticle = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export type NewsResponse = {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
};

export type NewsDataArticle = {
  article_id: string;
  title: string;
  link: string;
  description: string | null;
  content: string | null;
  pubDate: string;
  image_url: string | null;
  source_id: string;
  source_url: string | null;
  creator: string[] | null;
  keywords: string[] | null;
  video_url: string | null;
  country: string[];
  category: string[];
  language: string;
};

export type Category = 'business' | 'science' | 'technology' | 'entertainment' | 'health' | 'sports'; 