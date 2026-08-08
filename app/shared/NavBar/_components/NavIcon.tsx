'use client'
import { ShoppingCart } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
export default function NavIcon() {
  return (
    <div className="flex items-center gap-7" >
<ShoppingCart size={22} className="text-zinc-600" />
<ThemeToggle/>   
    </div>
  )
}

