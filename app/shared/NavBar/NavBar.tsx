"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import NavLogo from "./_components/NavLogo";
import NavSearch from "./_components/NavSearch";
import NavLink from "./_components/NavLink";
import NavIcon from "./_components/NavIcon";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center h-[70px] gap-4">

      {/* Menu + Logo */}
      <div className="flex items-center gap-2 shrink-0">

        {/* Menu - Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <NavLogo />
      </div>

      {/* Search */}
      <div className="flex-1 max-w-[400px]">
        <NavSearch />
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex flex-1 justify-center">
        <NavLink />
      </div>

      {/* Icons */}
      <div className="shrink-0">
        <NavIcon />
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white dark:bg-[#071426] border-t dark:border-zinc-800 lg:hidden z-50">
          <div className="flex justify-center py-10">
            <NavLink />
          </div>
        </div>
      )}

    </nav>
  );
}