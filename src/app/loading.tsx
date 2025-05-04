import LoadingSpinner from "@/components/LoadingSpinner";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <LoadingSpinner />
      <p className="mt-4 text-gray-600 dark:text-gray-400">Loading news...</p>
    </div>
  );
}
