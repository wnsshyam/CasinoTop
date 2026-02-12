import Image from "next/image";
import { Star } from "lucide-react";
import BonusButton from "@/components/ui/BonusButton";
import ScoreBadge from "@/components/ui/ScoreBadge";

interface CasinoProps {
  name: string;
  logo: string;
  rating: number;
  score: number;
  bonus: string;
  description: string;
}

const casinos: CasinoProps[] = [
  {
    name: "Slots.LV",
    logo: "/slot.png",
    rating: 5.0,
    score: 98,
    bonus: "200% up to $3,000 + 30 free spins",
    description: "Fast crypto payouts and sleek UX",
  },
  {
    name: "Decode Casino",
    logo: "/decode.png",
    rating: 5.0,
    score: 98,
    bonus: "$100 free bonus on your $25+ deposit",
    description: "Popular US sweepstakes site",
  },
  {
    name: "RedStag Casino",
    logo: "/redstage.png",
    rating: 5.0,
    score: 98,
    bonus: "200% up to $3,000 + 30 free spins",
    description: "Trusted Nordic brand with mobile-first design",
  },
  {
    name: "SuperSlots Casino",
    logo: "/superslot.png",
    rating: 4.7,
    score: 97,
    bonus: "$6,000 welcome bonus + 100 free spins",
    description: "Fast crypto payouts and sleek UX",
  },
  {
    name: "Grande Vegas Casino",
    logo: "/grande.png",
    rating: 4.5,
    score: 95,
    bonus: "600% up to $1,000 + 60 free spins",
    description: "Fast crypto payouts and sleek UX",
  },
];

const CasinoCard = ({ casino }: { casino: CasinoProps }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Logo Section */}
        {/* Logo Section */}
        <div className="relative flex-shrink-0">
          <div className="relative w-[171px] h-[122px]">
            {/* <ScoreBadge score={casino.score} /> */}

            <div className="w-full h-full rounded-[8px]  relative overflow-hidden">
              <Image
                src={casino.logo}
                alt={casino.name}
                fill
                className="object-contain "
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-1">
            <span >{casino.name}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              {casino.rating}
              <Star className="w-4 h-4 fill-red-500 text-red-500" />
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {casino.bonus}
          </h3>

          <p className="text-sm text-gray-600 mb-2">{casino.description}</p>

          <div className="text-xs text-gray-500">
            Reviewed by <span className="text-red-600">Lina Meyer</span> ·
            Updated June 5, 2025
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 md:min-w-[160px]">
          <BonusButton />
          <button className="text-red-600 text-sm font-medium hover:underline text-center">
            Read Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default function TopCasinoList() {
  return (
    <section className="max-w-5xl mx-auto  py-10">
      <h2 className="text-2xl font-bold mb-6">Top Casinos</h2>

      <div className="space-y-4">
        {casinos.map((casino, index) => (
          <CasinoCard key={index} casino={casino} />
        ))}
      </div>
    </section>
  );
}
