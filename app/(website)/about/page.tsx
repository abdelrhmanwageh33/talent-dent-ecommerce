import Image from "next/image";
import {
  ShieldCheck,
  Target,
  Users,
  Award,
  Truck,
  Headphones,
} from "lucide-react";

export default function page() {
  return (
    <section className="w-full bg-white px-4 py-8 dark:bg-[#06111F] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Top Section */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">

          {/* Content */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              About{" "}
              <span className="text-[#047484]">
                Talent Dent
              </span>
            </h1>

            <h2 className="mt-2 text-base font-semibold text-gray-900 dark:text-white">
              Your Trusted Partner in Dental Care
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-gray-500 dark:text-gray-400">
              At Talent Dent, we are committed to providing high-quality
              dental supplies and equipment to support dental professionals
              in delivering the best care.
            </p>

            {/* Mission / Vision / Values */}
            <div className="mt-7 space-y-5">

              {/* Mission */}
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#bdecef] text-[#047484]">
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Our Mission
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    To provide premium quality dental products
                    with exceptional service.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#bdecef] text-[#047484]">
                  <Target size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Our Vision
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    To be the leading dental supplies provider
                    in the region.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#bdecef] text-[#047484]">
                  <Users size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Our Values
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Quality, Reliability, Innovation, and Customer
                    Satisfaction.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Image */}
          <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[400px] lg:h-[430px]">
            <Image
              src="/about-dental.png"
              alt="Dental clinic"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-lg bg-[#047484] text-white sm:grid-cols-4">

          <div className="border-b border-white/20 px-4 py-5 text-center sm:border-b-0 sm:border-r">
            <h3 className="text-2xl font-bold">
              1000+
            </h3>

            <p className="mt-1 text-xs text-white/80">
              Happy Customers
            </p>
          </div>

          <div className="border-b border-white/20 px-4 py-5 text-center sm:border-b-0 sm:border-r">
            <h3 className="text-2xl font-bold">
              2500+
            </h3>

            <p className="mt-1 text-xs text-white/80">
              Products
            </p>
          </div>

          <div className="px-4 py-5 text-center sm:border-r sm:border-white/20">
            <h3 className="text-2xl font-bold">
              500+
            </h3>

            <p className="mt-1 text-xs text-white/80">
              Dental Clinics
            </p>
          </div>

          <div className="px-4 py-5 text-center">
            <h3 className="text-2xl font-bold">
              5+
            </h3>

            <p className="mt-1 text-xs text-white/80">
              Years of Experience
            </p>
          </div>

        </div>

        {/* Why Choose Us */}
        <div className="mt-8">

          <h2 className="mb-5 text-xl font-semibold text-gray-900 dark:text-white">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* Card */}
            <div className="rounded-lg border border-gray-200 p-5 shadow-sm dark:border-gray-700">

              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7f8] text-[#047484]">
                <ShieldCheck size={18} />
              </div>

              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Premium Quality
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                We provide only the best quality products.
              </p>

            </div>

            <div className="rounded-lg border border-gray-200 p-5 shadow-sm dark:border-gray-700">

              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7f8] text-[#047484]">
                <Award size={18} />
              </div>

              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Wide Range
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                A comprehensive range of dental supplies.
              </p>

            </div>

            <div className="rounded-lg border border-gray-200 p-5 shadow-sm dark:border-gray-700">

              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7f8] text-[#047484]">
                <ShieldCheck size={18} />
              </div>

              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Competitive Prices
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Best prices with great value.
              </p>

            </div>

            <div className="rounded-lg border border-gray-200 p-5 shadow-sm dark:border-gray-700">

              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7f8] text-[#047484]">
                <Headphones size={18} />
              </div>

              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Excellent Support
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Dedicated support for all our customers.
              </p>

            </div>

          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-gray-700">

          <div>
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
              Stay Updated
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Subscribe to our newsletter for the latest offers and updates.
            </p>
          </div>

          <div className="flex w-full max-w-md">

            <input
              type="email"
              placeholder="Enter your email"
              className="h-10 min-w-0 flex-1 rounded-l-md border border-gray-300 px-4 text-xs outline-none focus:border-[#047484] dark:border-gray-600 dark:bg-[#0b1825] dark:text-white"
            />

            <button
              type="button"
              className="h-10 rounded-r-md bg-[#047484] px-5 text-xs font-medium text-white transition hover:bg-[#036471]"
            >
              Subscribe
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}