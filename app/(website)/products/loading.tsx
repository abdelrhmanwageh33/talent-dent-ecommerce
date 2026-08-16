// products/loading.tsx
import { SkeletonCard } from "@/app/shared/SkeletonCard";
import { Skeleton } from "@/components/ui/skeleton"
export default function Loading() {
  return (
    <section className="p-4 sm:p-6 lg:p-7">
      <div className="mb-6 h-8 w-40 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Categories Skeleton */}
        <div className="md:col-span-3">
          <div className="mb-4 h-6 w-28 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />

          <div className="flex flex-wrap gap-3 md:flex-col">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard
                key={index}
     
              />
            ))}
          </div>
        </div>

        {/* Products Skeleton */}
        <div className="md:col-span-9">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="h-72 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}