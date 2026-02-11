"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const countries = [
  { name: "United States", code: "us" },
  { name: "United Kingdom", code: "gb" },
  { name: "Canada", code: "ca" },
  { name: "Australia", code: "au" },
];

export default function CountryDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(countries[0]);

  return (
    <div className="relative">
      {/* Selected Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-[14px] font-medium bg-white hover:border-gray-300 transition"
      >
        <div className="w-5 h-5 rounded-full overflow-hidden">
          <img
            src={`https://flagcdn.com/${selected.code}.svg`}
            alt={selected.name}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-gray-700">{selected.name}</span>
        <ChevronDown size={16} className="text-gray-500" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {countries.map((country) => (
            <div
              key={country.code}
              onClick={() => {
                setSelected(country);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              <img
                src={`https://flagcdn.com/${country.code}.svg`}
                alt={country.name}
                className="w-5 h-5 rounded-full"
              />
              {country.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
