'use client'
import { PackageCheck, ShoppingCart } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { getGuestId } from "@/lib/guestId";
export default function NavIcon() {
  return (
    <div className="flex items-center gap-7" >
      <Link href={"/cart"}>
      <ShoppingCart size={22} className="text-zinc-600" />
      </Link>
<Link
  href={`/order-success/${getGuestId()}`}
  className="relative flex items-center justify-center"
>
  <PackageCheck
    size={22}
    className="text-zinc-600 transition-colors hover:text-[#047484] dark:text-zinc-300"
  />
</Link>
<ThemeToggle/>   
    </div>
  )
}

