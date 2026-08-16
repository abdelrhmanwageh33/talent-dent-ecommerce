import { Category } from "@/lib/ProductType";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function ProductCategory({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <section className="w-full">
      <h3 className="mb-4 text-md font-semibold text-[#263238] p-4">
        Categories
      </h3>

      <div className="flex flex-wrap items-start md:flex-col gap-3 ">
        {/* All Categories */}
        <Link
          href="/products"
          className="flex items-center gap-2 text-sm text-[#5f6b73] transition hover:text-[#047484]"
        >
          <Checkbox className="h-3 w-3 rounded-[3px]" />
          <span>All Categories</span>
        </Link>

        {/* Categories */}
        {categories?.map((category) => (
          <Link
            key={category._id}
            href={`/products?category=${category.slug}`}
            className="flex items-center gap-2 text-sm text-[#5f6b73] transition hover:text-[#047484]"
          >
            <Checkbox
              id={category._id}
              className="h-3 w-3 rounded-[3px]"
            />

            <span className="capitalize">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}