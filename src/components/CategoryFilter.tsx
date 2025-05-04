import { Category } from "@/types";

type CategoryFilterProps = {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
};

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const categories: Category[] = [
    "business",
    "science",
    "technology",
    "entertainment",
    "general",
    "health",
    "sports",
  ];

  return (
    <div className="mb-8">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"></label>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 text-sm rounded-md transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
