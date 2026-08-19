"use client";

import { PackageCheck, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function NavIcon() {
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    const storedOrderId = localStorage.getItem("order_id");
    setOrderId(storedOrderId);
  }, []);

  return (
    <div className="hidden items-center gap-7 lg:flex">
      {/* Cart */}
      <Link
        href="/cart"
        className="flex items-center justify-center"
        aria-label="Shopping cart"
      >
        <ShoppingCart
          size={22}
          className="text-zinc-600 transition-colors hover:text-[#047484] dark:text-zinc-300"
        />
      </Link>

      {/* Orders */}
      <Link
        href={
          orderId
            ? `/order-success/${orderId}`
            : "/order-success"
        }
        className="flex items-center justify-center"
        aria-label="My orders"
      >
        <PackageCheck
          size={22}
          className="text-zinc-600 transition-colors hover:text-[#047484] dark:text-zinc-300"
        />
      </Link>

      {/* Theme */}
      <ThemeToggle />
    </div>
  );
}