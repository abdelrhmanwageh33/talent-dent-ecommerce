"use client";

import { useAppSelector } from "@/hooks/reduxHook";
import Link from "next/link";


export default function CartSummary() {
  const totalPrice = useAppSelector(
    (state) => state.cart.totalPrice
  );

  return (
    <div className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#0a1929]">
      <h2 className="text-xl font-semibold text-[#06111F] dark:text-white">
        Order Summary
      </h2>

      <div className="mt-6 space-y-4 text-sm">
        <div className="flex justify-between text-gray-500">
          <span>Subtotal</span>

          <span className="font-medium text-[#06111F] dark:text-white">
            ${totalPrice}
          </span>
        </div>

        <div className="flex justify-between text-gray-500">
          <span>Shipping</span>

          <span className="font-medium text-[#06111F] dark:text-white">
            Free
          </span>
        </div>

        <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
          <div className="flex justify-between">
            <span className="font-semibold text-[#06111F] dark:text-white">
              Total
            </span>

            <span className="text-xl font-bold text-[#047484]">
              ${totalPrice}
            </span>
          </div>
        </div>
      </div>

    <Link href={'/checkout'}>
      <button className="mt-6 w-full rounded-lg bg-[#047484] py-3 font-medium text-white transition hover:bg-[#035f6a]">
        Proceed to Order
      </button>
    </Link>

      <button className="mt-3 w-full rounded-lg border border-gray-200 py-3 font-medium text-[#06111F] transition hover:border-[#047484] hover:text-[#047484] dark:border-gray-700 dark:text-white">
        Continue Shopping
      </button>
    </div>
  );
}