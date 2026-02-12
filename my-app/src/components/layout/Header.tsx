"use client";

import { useState } from "react";
import { Menu, X, Search, Scale, ChevronDown } from "lucide-react";
import Image from "next/image";
import CountryDropdown from "@/components/CountryDropdown";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#fff] border-b border-[#E5E7E8] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="CasinoTop Logo"
            width={213}
            height={40}
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-[16px] leading-[24px] font-medium text-black">
          <a
            href="#"
            className="hover:text-black transition-colors duration-200"
          >
            Top Casinos
          </a>
          <a
            href="#"
            className="hover:text-black transition-colors duration-200"
          >
            Reviews
          </a>
          <a
            href="#"
            className="hover:text-black transition-colors duration-200"
          >
            Articles
          </a>
        </nav>

        {/* Right Section Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Search size={18} className="text-gray-600 cursor-pointer" />
          <Scale size={18} className="text-gray-600 cursor-pointer" />
          <CountryDropdown />
          <button className="border border-red-500 text-red-500 px-5 py-2 rounded-md text-sm font-semibold hover:bg-red-50 transition">
            See Top Casinos
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="bg-white w-72 h-full p-6 shadow-lg">
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-semibold">Menu</span>
              <X
                size={22}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            <nav className="flex flex-col gap-6 text-gray-700 font-medium">
              <a href="#">Top Casinos</a>
              <a href="#">Reviews</a>
              <a href="#">Articles</a>
            </nav>

            <div className="mt-8 border-t pt-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 border px-3 py-2 rounded-md text-sm bg-white w-fit">
                🇺🇸
                <span>United States</span>
              </div>

              <button className="border border-red-500 text-red-500 px-5 py-2 rounded-md text-sm font-semibold hover:bg-red-50 transition">
                See Top Casinos
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
