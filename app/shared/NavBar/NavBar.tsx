"use client";

import React from "react";

import NavLogo from "./_components/NavLogo";
import NavSearch from "./_components/NavSearch";
import NavLink from "./_components/NavLink";
import NavIcon from "./_components/NavIcon";

export default function NavBar() {
  return (
    <nav className="relative flex h-[90px] items-center gap-4">
      {/* Logo */}
      <div className="shrink-0">
        <NavLogo />
      </div>

      {/* Search */}
      <div className="flex-1 max-w-[600px]">
        <NavSearch />
      </div>

      {/* Desktop Links */}
      <div className="hidden flex-1 justify-center lg:flex">
        <NavLink />
      </div>

      {/* Icons */}
      <div className="shrink-0">
        <NavIcon />
      </div>
    </nav>
  );
}