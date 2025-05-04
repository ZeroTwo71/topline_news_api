import { NewsArticle } from "@/types";
import NewsCard from "./NewsCard";

type NewsGridProps = {
  articles: NewsArticle[];
};

export default function NewsGrid({ articles }: NewsGridProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600 dark:text-gray-400">No articles found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {articles.map((article, index) => (
        <NewsCard key={`${article.url}-${index}`} article={article} />
      ))}
    </div>
  );
}
