import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Truck,
  Headphones,
  LockKeyhole,
  ArrowRight,
  Star,
  Sparkles,
  ShoppingCart,
} from "lucide-react";

import { getAllCategories, getProducts } from "@/services/productService";

export default async function Home() {
  const [{ products }, categories] = await Promise.all([
    getProducts(1, 12),
    getAllCategories(),
  ]);

  const bestSellers = products?.filter(
    (product:any) => product.active
  );

  const newProducts = products?.filter(
    (product:any) => product.active
  );

  const saleProducts = products?.filter(
    (product:any) => product.active
  );

  return (
    <main className="bg-white dark:bg-[#06111F]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center overflow-hidden rounded-2xl bg-[#f3fafb] dark:bg-[#0a1b28] lg:grid-cols-2">

          {/* Content */}
          <div className="px-6 py-12 sm:px-10 lg:px-12 lg:py-16">

            <span className="text-sm font-medium text-[#047484]">
              Trusted Dental Supplies
            </span>

            <h1 className="mt-3 max-w-xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl dark:text-white">
              Everything for{" "}
              <span className="text-[#047484]">
                Dental
              </span>{" "}
              Professionals
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500 dark:text-gray-400">
              High quality dental supplies and equipment
              for clinics and labs.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <Link
                href="/products"
                className="rounded-md bg-[#047484] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#036471]"
              >
                Shop Now
              </Link>

              <Link
                href="/products"
                className="rounded-md border border-[#8ed5db] bg-white px-6 py-3 text-sm font-medium text-[#047484] transition hover:bg-[#f3fafb] dark:bg-transparent"
              >
                Explore Categories
              </Link>

            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-[300px] lg:min-h-[460px]">
            <Image
              src="/hero-dental.png"
              alt="Dental instruments"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-xl border border-gray-200 bg-white sm:grid-cols-4 dark:border-gray-700 dark:bg-[#0b1825]">

          <Feature
            icon={<ShieldCheck size={20} />}
            title="High Quality"
            description="Premium Products"
          />

          <Feature
            icon={<Truck size={20} />}
            title="Fast Delivery"
            description="Across Egypt"
          />

          <Feature
            icon={<Sparkles size={20} />}
            title="Trusted by Dentists"
            description="Professionals"
          />

          <Feature
            icon={<LockKeyhole size={20} />}
            title="Secure Payment"
            description="100% Safe"
          />

        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            title="Shop By Category"
            href="/products"
          />

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

            {categories?.slice(0, 6).map((category:any) => (
              <Link
                key={category._id}
                href={`/products?slug=${category.slug}`}
                className="group"
              >

                <div className="flex h-36 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 transition group-hover:border-[#9adce1] dark:border-gray-700 dark:bg-[#0b1825]">

                  {category.image ? (
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={120}
                      height={120}
                      className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-sm text-gray-400">
                      No Image
                    </div>
                  )}

                </div>

                <p className="mt-3 text-center text-xs font-medium capitalize text-gray-700 dark:text-gray-300">
                  {category.name}
                </p>

              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          BEST SELLERS
      ====================================================== */}
      {bestSellers?.length > 0 && (
        <ProductSection
          title="Best Sellers"
          subtitle="Our most popular dental products"
          products={bestSellers}
          href="/products?bestSeller=true"
        />
      )}

      {/* =====================================================
          NEW ARRIVALS
      ====================================================== */}
      {newProducts?.length > 0 && (
        <ProductSection
          title="New Arrivals"
          subtitle="Discover our latest products"
          products={newProducts}
          href="/products?new=true"
        />
      )}

      {/* =====================================================
          SALE
      ====================================================== */}
      {saleProducts?.length > 0 && (
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="overflow-hidden rounded-2xl bg-[#047484]">

              <div className="grid grid-cols-1 items-center lg:grid-cols-2">

                <div className="px-7 py-10 sm:px-10 lg:px-14">

                  <span className="text-sm font-medium text-white/80">
                    Special Offers
                  </span>

                  <h2 className="mt-2 text-3xl font-bold text-white">
                    Save More on Your
                    Dental Essentials
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
                    Discover our latest deals and get premium
                    dental products at great prices.
                  </p>

                  <Link
                    href="/products?sale=true"
                    className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-[#047484] transition hover:bg-gray-100"
                  >
                    Shop Sale
                    <ArrowRight size={16} />
                  </Link>

                </div>

                <div className="relative hidden min-h-[280px] lg:block">

                  {saleProducts[0]?.image && (
                    <Image
                      src={saleProducts[0].image}
                      alt={saleProducts[0].name}
                      fill
                      className="object-contain p-10"
                    />
                  )}

                </div>

              </div>

            </div>

          </div>
        </section>
      )}

      {/* =====================================================
          WHY TALENT DENT
      ====================================================== */}
      <section className="bg-[#f7fbfc] px-4 py-14 sm:px-6 lg:px-8 dark:bg-[#081722]">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-medium text-[#047484]">
              Why Talent Dent?
            </span>

            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              Everything Your Clinic Needs
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
              We make it easier for dental professionals to
              find quality products at competitive prices.
            </p>

          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <WhyCard
              icon={<ShieldCheck />}
              title="Premium Quality"
              description="We carefully select high-quality dental products."
            />

            <WhyCard
              icon={<ShoppingCart />}
              title="Wide Range"
              description="Everything you need for your dental clinic."
            />

            <WhyCard
              icon={<Star />}
              title="Competitive Prices"
              description="Great products at prices that offer real value."
            />

            <WhyCard
              icon={<Headphones />}
              title="Excellent Support"
              description="Our team is ready to help whenever you need us."
            />

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl bg-[#eaf8f9] px-6 py-12 text-center dark:bg-[#0b202b]">

          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Ready to Upgrade Your Dental Practice?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 dark:text-gray-400">
            Explore our collection of dental supplies and
            find everything your clinic needs.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#047484] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#036471]"
          >
            Browse Products
            <ArrowRight size={16} />
          </Link>

        </div>
      </section>

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}
      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between dark:border-gray-700 dark:bg-[#0b1825]">

          <div>
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
              Stay Updated
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Subscribe for the latest offers and updates.
            </p>
          </div>

          <div className="flex w-full max-w-md">

            <input
              type="email"
              placeholder="Enter your email"
              className="h-10 min-w-0 flex-1 rounded-l-md border border-gray-300 px-4 text-xs outline-none focus:border-[#047484] dark:border-gray-600 dark:bg-[#07141f] dark:text-white"
            />

            <button
              type="button"
              className="rounded-r-md bg-[#047484] px-5 text-xs font-medium text-white hover:bg-[#036471]"
            >
              Subscribe
            </button>

          </div>

        </div>
      </section>

    </main>
  );
}


/* ============================================================
   FEATURE
============================================================ */

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-gray-100 p-4 last:border-0 sm:border-b-0 sm:border-r dark:border-gray-700">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f7f8] text-[#047484]">
        {icon}
      </div>

      <div>
        <h3 className="text-xs font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-1 text-[10px] text-gray-400">
          {description}
        </p>
      </div>

    </div>
  );
}


/* ============================================================
   SECTION TITLE
============================================================ */

function SectionTitle({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <div className="flex items-center justify-between">

      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>

      <Link
        href={href}
        className="flex items-center gap-1 text-xs font-medium text-[#047484] hover:underline"
      >
        View All
        <ArrowRight size={13} />
      </Link>

    </div>
  );
}


/* ============================================================
   PRODUCT SECTION
============================================================ */

function ProductSection({
  title,
  subtitle,
  products,
  href,
}: {
  title: string;
  subtitle: string;
  products: any[];
  href: string;
}) {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-6 flex items-end justify-between">

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              {subtitle}
            </p>
          </div>

          <Link
            href={href}
            className="flex items-center gap-1 text-xs font-medium text-[#047484]"
          >
            View All
            <ArrowRight size={13} />
          </Link>

        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

          {products.slice(0, 5).map((product) => (
            <Link
              key={product._id}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-[#0b1825]"
            >

              <div className="relative flex h-44 items-center justify-center bg-gray-50 dark:bg-[#101e2a]">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={180}
                  className="h-full w-full object-contain p-5 transition duration-300 group-hover:scale-105"
                />

                {product.isOnSale && (
                  <span className="absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-[10px] font-medium text-white">
                    Sale
                  </span>
                )}

              </div>

              <div className="p-3">

                <h3 className="line-clamp-2 min-h-10 text-xs font-medium text-gray-800 dark:text-gray-200">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center justify-between">

                  <span className="font-semibold text-[#047484]">
                    EGP {product.price?.toLocaleString()}
                  </span>

                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star
                      size={12}
                      fill="currentColor"
                    />
                    <span className="text-[10px] text-gray-400">
                      4.8
                    </span>
                  </div>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}


/* ============================================================
   WHY CARD
============================================================ */

function WhyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-[#0b1825]">

      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7f8] text-[#047484]">
        {icon}
      </div>

      <h3 className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-gray-500">
        {description}
      </p>

    </div>
  );
}