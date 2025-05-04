"use client";

import { useState, useEffect } from "react";
import { Category, NewsResponse } from "@/types";
import { fetchNews } from "@/utils/api";
import CategoryFilter from "@/components/CategoryFilter";
import NewsGrid from "@/components/NewsGrid";
import LoadingSpinner from "@/components/LoadingSpinner";

async function getNewsData(category: Category): Promise<NewsResponse> {
  try {
    return await fetchNews(category);
  } catch (error) {
    console.error("Error fetching news:", error);
    return {
      status: "error",
      totalResults: 0,
      articles: [],
    };
  }
}

export default function Home() {
  const [category, setCategory] = useState<Category>("business");
  const [articles, setArticles] = useState<NewsResponse["articles"]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch news data when component mounts or filters change
  useEffect(() => {
    async function loadNews() {
      setLoading(true);
      setError(null);

      try {
        const data = await getNewsData(category);
        setArticles(data.articles);
      } catch (err) {
        setError("Failed to load news. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, [category]);

  const handleCategoryChange = (newCategory: Category) => {
    setCategory(newCategory);
  };

  return (
    <main>
      <CategoryFilter
        selectedCategory={category}
        onCategoryChange={handleCategoryChange}
      />

      {error && (
        <div className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-md mb-6">
          {error}
        </div>
      )}

      {loading ? <LoadingSpinner /> : <NewsGrid articles={articles} />}
    </main>
  );
}
