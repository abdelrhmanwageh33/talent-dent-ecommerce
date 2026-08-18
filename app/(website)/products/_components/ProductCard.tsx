import Image from "next/image";
import { Product } from "@/lib/ProductType";
import Link from "next/link";
import AddToCartButton from "@/app/shared/AddToCartButton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
 <Link href={`/products/${product?.slug}`}>
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-[#0B1B2A]">

      {/* Product Image */}
      <div className="relative flex h-52 items-center justify-center rounded-md bg-gray-50 dark:bg-gray-800">
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={product.name}
          className="h-full w-full object-contain p-4"
        />

        {/* Favorite */}
        {product?.isBestSeller&&(  <button
          type="button"
    
          className="absolute right-2 top-2 rounded-full bg-white p-2 shadow-sm hover:text-red-500 dark:bg-gray-700"
        >
        Best seller
        </button>)}
      

        {/* New */}
        {product.isNewArrival && (
          <span className="absolute left-2 top-2 rounded bg-cyan-500 px-2 py-1 text-xs font-medium text-white">
            New
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col gap-2 pt-3">

        <p className="text-xs text-gray-500 dark:text-gray-400">
          {product.brand}
        </p>

        <h2 className="line-clamp-2 min-h-10 text-sm font-medium text-gray-900 dark:text-white">
          {product.name}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-xs text-gray-400">(4.8)</span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-center gap-2">
          <h3 className="text-lg font-bold text-cyan-600">
            EGP {product.price}
          </h3>

          {product.discount > 0 && (
            <span className="text-xs text-gray-400 line-through">
              EGP {product.price + product.discount}
            </span>
          )}
        </div>

        {/* Add to cart */}
              <AddToCartButton productId={product._id} />

      </div>
    </div>
 </Link>
  );
}