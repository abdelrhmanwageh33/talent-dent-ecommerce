"use client";

import { useAppSelector } from "@/hooks/reduxHook";
import CartItem from "./CartItem";

export default function CartItems() {
  const items = useAppSelector((state) => state.cart.items);

  if (!items.length) {
    return (
      <div className="rounded-xl border border-gray-200 p-10 text-center">
        <p className="text-gray-500">
          Your cart is empty
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem
          key={item._id}
          item={item}
        />
      ))}
    </div>
  );
}