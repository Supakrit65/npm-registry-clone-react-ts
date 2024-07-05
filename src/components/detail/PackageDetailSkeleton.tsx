

export default function PackageDetailSkeleton() {
  return (
    <div className="max-w-5xl mx-auto my-6 p-6 space-y-8 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg shadow-md border dark:border-neutral-900 animate-pulse">
      {/* Title Section */}
      <div className="flex items-center justify-between pb-2">
        <div className="h-8 bg-gray-300 dark:bg-neutral-600 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 dark:bg-neutral-600 rounded w-16"></div>
      </div>

      {/* Description Section */}
      <div className="space-y-2">
        <div className="h-6 bg-gray-300 dark:bg-neutral-600 rounded w-40"></div>
        <div className="h-40 bg-gray-300 dark:bg-neutral-600 rounded"></div>
      </div>

      {/* License Section */}
      <div className="space-y-2">
        <div className="h-6 bg-gray-300 dark:bg-neutral-600 rounded w-24"></div>
        <div className="h-8 bg-gray-300 dark:bg-neutral-600 rounded"></div>
      </div>

      {/* Author Section */}
      <div className="space-y-2">
        <div className="h-6 bg-gray-300 dark:bg-neutral-600 rounded w-24"></div>
        <div className="h-24 bg-gray-300 dark:bg-neutral-600 rounded"></div>
      </div>

      {/* Maintainers Section */}
      <div className="space-y-2">
        <div className="h-6 bg-gray-300 dark:bg-neutral-600 rounded w-36"></div>
        <div className="h-24 bg-gray-300 dark:bg-neutral-600 rounded"></div>
      </div>

      {/* README Section */}
      <div className="space-y-2">
        <div className="h-6 bg-gray-300 dark:bg-neutral-600 rounded w-24"></div>
        <div className="h-64 bg-gray-300 dark:bg-neutral-600 rounded"></div>
      </div>
    </div>
  );
}
