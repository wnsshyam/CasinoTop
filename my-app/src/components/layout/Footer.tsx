"use client";

import CountryDropdown from "../CountryDropdown";
import { Bot, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] border-t border-[#E5E7E8] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 text-[14px] leading-[24px] font-medium text-gray-700">
        <div className=" grid grid-cols-1 md:grid-cols-4 md:grid-cols-[1fr_1fr_1fr_2fr]  gap-10">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="CasinoTop Logo"
                className="h-10 w-auto"
              />
            </div>

            <p className="text-gray-600 mb-4 font-normal">
              Expert reviews, bonus updates <br />& responsible guidance.
            </p>

            <CountryDropdown />
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-black mb-4 font-semibold">Reviews</h4>

            <div className="space-y-2 text-gray-600 font-normal">
              <p>
                Editor-in-Chief:{" "}
                <span className="text-red-500 font-medium">Reza Shojaei</span>
              </p>
              <p>
                Content Manager:{" "}
                <span className="text-red-500 font-medium">David J.</span>
              </p>
              <p>
                SEO & Technical Oversight:{" "}
                <span className="text-red-500 font-medium">David J.</span>
              </p>
              <p>
                Contact:{" "}
                <span className="text-red-500 font-medium">
                  contact@casinotop.com
                </span>
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-black mb-4 text-[14px] leading-[24px] font-medium">
              Transparency
            </h4>

            <div className="space-y-[14px] text-[14px] leading-[24px] font-medium">
              <p className="text-red-500 cursor-pointer hover:underline">
                How We Test Casinos
              </p>
              <p className="text-red-500 cursor-pointer hover:underline">
                Our Editorial Policy
              </p>
              <p className="text-red-500 cursor-pointer hover:underline">
                How We Use AI
              </p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="w-full max-w-none border border-red-400 bg-red-50 rounded-2xl p-5">
            <div className="flex flex-col gap-3">
              {/* Icon */}
              <div className="mt-1 text-gray-800">
                <img src="/icons/bot.png" className="w-6 h-6" />
              </div>

              {/* Content */}
              <div>
                <p className="text-gray-800 text-[14px] leading-[22px] mb-4 font-normal">
                  Some sections of this page were generated with the help of AI
                  tools, reviewed and verified by our editorial team.
                </p>

                <div className="flex items-center gap-2 text-red-500 text-[14px] font-medium cursor-pointer hover:opacity-80 transition">
                  Read Full Review
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between text-[12px] text-gray-500 gap-4 font-normal">
          <p>© 2025 CasinoTop. All rights reserved.</p>

          <div className="flex gap-6">
            <p className="cursor-pointer hover:text-black">Privacy Policy</p>
            <p className="cursor-pointer hover:text-black">Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
