"use client";

import { useState } from "react";

interface CasinoTabsProps {
  tabs: string[];
}

export default function CasinoTabs({ tabs }: CasinoTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full border border-[#E5E7E8] rounded-xl px-6">
      <div className="flex gap-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative py-4 text-sm font-medium transition-colors ${
              activeTab === index
                ? "text-red-500"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab}

            {/* Active underline */}
            {activeTab === index && (
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-red-500 rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
