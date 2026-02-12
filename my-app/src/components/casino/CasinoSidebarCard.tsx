import { Star } from "lucide-react";

interface CasinoSidebarCardProps {
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  features: string[];
}

export default function CasinoSidebarCard({
  name,
  logo,
  rating,
  bonus,
  features,
}: CasinoSidebarCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
      <img src={logo} alt={name} className="w-full rounded-xl" />

      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-red-500 fill-red-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600">{bonus}</p>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        {features.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>

      <button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-xl py-3 font-medium transition">
        Play Now
      </button>
    </div>
  );
}
