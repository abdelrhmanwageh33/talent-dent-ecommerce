"use client";

import Image from "next/image";
import { Minus, Plus, Heart, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Product } from "@/lib/ProductType";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (product.stock && quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    

      {/* Product Main Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Product Image */}
        <div className="relative flex min-h-[400px] items-center justify-center rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-[#0b1825]">
          {/* Wishlist */}
          <button
            type="button"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-[#047484] hover:text-[#047484] dark:border-gray-700 dark:bg-[#0b1825]"
          >
            <Heart size={20} />
          </button>

          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            priority
            className="h-[350px] w-full object-contain sm:h-[420px]"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col">
          {/* Stock */}
          <div className="mb-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                product.stock > 0
                  ? "bg-green-50 text-green-600 dark:bg-green-950"
                  : "bg-red-50 text-red-600 dark:bg-red-950"
              }`}
            >
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Product Name */}
          <h1 className="text-2xl font-semibold capitalize text-gray-900 sm:text-3xl dark:text-white">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <div className="flex text-yellow-400">
              ★★★★★
            </div>

            <span className="text-sm text-gray-500">
              4.8
            </span>

            <span className="text-sm text-gray-400">
              32 Reviews
            </span>
          </div>

          {/* Price */}
          <div className="mt-5 flex items-center gap-3">
            <span className="text-3xl font-bold text-[#047484]">
              EGP {product.price?.toLocaleString()}
            </span>

            {product.discount && (
              <span className="rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-500 dark:bg-red-950">
                -{product.discount}%
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mt-5 leading-7 text-gray-500 dark:text-gray-400">
            {product.description}
          </p>

          {/* Product Info */}
          <div className="mt-5 space-y-2 text-sm">
            {product.brand && (
              <div className="flex gap-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Brand:
                </span>

                <span className="text-gray-500">
                  {product.brand}
                </span>
              </div>
            )}

            {product.category?.name && (
              <div className="flex gap-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Category:
                </span>

                <span className="capitalize text-gray-500">
                  {product.category.name}
                </span>
              </div>
            )}
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Quantity
            </p>

            <div className="flex w-fit items-center rounded-md border border-gray-300 dark:border-gray-600">
              <button
                type="button"
                onClick={decreaseQuantity}
                disabled={quantity === 1}
                className="flex h-10 w-10 items-center justify-center text-gray-500 transition hover:text-[#047484] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Minus size={16} />
              </button>

              <span className="flex h-10 w-12 items-center justify-center border-x border-gray-300 text-sm font-medium dark:border-gray-600 dark:text-white">
                {quantity}
              </span>

              <button
                type="button"
                onClick={increaseQuantity}
                disabled={!product.stock || quantity >= product.stock}
                className="flex h-10 w-10 items-center justify-center text-gray-500 transition hover:text-[#047484] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              disabled={!product.stock}
              className="h-12 flex-1 rounded-md bg-[#047484] px-6 font-medium text-white transition hover:bg-[#036471] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Add to Cart
            </button>

            <button
              type="button"
              disabled={!product.stock}
              className="h-12 flex-1 rounded-md border border-[#047484] px-6 font-medium text-[#047484] transition hover:bg-[#047484] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              Buy Now
            </button>

            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-md border border-gray-300 text-gray-500 transition hover:border-[#047484] hover:text-[#047484] dark:border-gray-600"
            >
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-8 grid grid-cols-1 gap-4 border-t border-gray-200 pt-6 sm:grid-cols-3 dark:border-gray-700">
        {/* Free Delivery */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f7f8] text-[#047484]">
            <Truck size={21} />
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-800 dark:text-white">
              Free Delivery
            </h3>

            <p className="text-xs text-gray-400">
              On orders over EGP 1,000
            </p>
          </div>
        </div>

        {/* Return */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f7f8] text-[#047484]">
            <RotateCcw size={21} />
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-800 dark:text-white">
              7 Days Return
            </h3>

            <p className="text-xs text-gray-400">
              Free return & refund
            </p>
          </div>
        </div>

        {/* Payment */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f7f8] text-[#047484]">
            <ShieldCheck size={21} />
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-800 dark:text-white">
              Secure Payment
            </h3>

            <p className="text-xs text-gray-400">
              100% secure checkout
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="border-b border-gray-200 px-5 py-4 dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white">
            Description
          </h2>
        </div>

        <div className="p-5">
          <p className="max-w-4xl text-sm leading-7 text-gray-500 dark:text-gray-400">
            {product.description}
          </p>
        </div>
      </div>
    </section>
  );
}