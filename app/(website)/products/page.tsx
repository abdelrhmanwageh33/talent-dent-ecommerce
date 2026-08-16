import Header from "@/app/shared/Header/Header";
import ProductGrid from "./_components/ProductGrid";
import { getAllCategories, getProducts } from "@/services/productService";
import ProductPagination from "./_components/ProductPagination";
import ProductCategory from "./_components/ProductCategory";
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    limit?: string;
    category?: string;
  }>;
}) {
  const params = await searchParams;

  const page = Number(params.page) || 1;
  const limit = Number(params.limit) || 12;
  const category = params.category;

  const { products } = await getProducts(page, limit, category);
  const allCategories = await getAllCategories();

  return (
    <section className="p-4 sm:p-6 lg:p-7">
      <Header
        h2="All Products"
        currentRoute="products"
        page="Products"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Categories */}
        <aside className="md:col-span-3">
          <ProductCategory categories={allCategories} />
        </aside>

        {/* Products */}
        <div className="md:col-span-9">
          <ProductGrid products={products} />
        </div>
      </div>

      <ProductPagination pagePagination={page} />
 
    </section>
  );
}