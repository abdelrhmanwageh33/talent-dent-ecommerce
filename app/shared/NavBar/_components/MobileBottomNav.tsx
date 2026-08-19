"use client";

import Link from "next/link";
import { Home, Package, ShoppingCart, User,Info, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
  {
    label: "Products",
    href: "/products",
    icon: Package,
  },
  {
    label: "Cart",
    href: "/cart",
    icon: ShoppingCart,
  },
  {
    label: "Account",
    href: "/order-success",
    icon: User,
  },
    {
    label: "contact",
    href: "/contact",
    icon: Phone,
  },
  
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-[#071426] lg:hidden">
      <div className="grid grid-cols-6">
        {links.map((link) => {
          const Icon = link.icon;

          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center gap-1 py-2 text-xs transition-colors ${
                isActive
                  ? "text-[#047484]"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              <Icon
                className="h-5 w-5"
                strokeWidth={isActive ? 2.5 : 2}
              />

              <span className="font-medium">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}