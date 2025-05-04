import { NewsArticle } from "@/types";
import Image from "next/image";

type NewsCardProps = {
  article: NewsArticle;
};

export default function NewsCard({ article }: NewsCardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="relative w-full h-48">
          {article.urlToImage ? (
            <Image
              src={article.urlToImage}
              alt={article.title}
              fill
              className="object-cover"
              unoptimized
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              {article.source.name}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formattedDate}
            </span>
          </div>

          <h3 className="text-lg font-bold mb-2 line-clamp-2 text-gray-900 dark:text-white">
            {article.title}
          </h3>

          {article.description && (
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-2">
              {article.description}
            </p>
          )}

          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            Read more &rarr;
          </span>
        </div>
      </a>
    </div>
  );
}
