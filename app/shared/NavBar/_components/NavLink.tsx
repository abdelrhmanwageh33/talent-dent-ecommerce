"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav>
      <ul className="md:flex items-start  md:items-center gap-7">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? "text-black font-semibold dark:text-white"
                    : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}