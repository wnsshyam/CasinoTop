import { Tag } from "lucide-react";

interface CasinoGamesProps {
  description: React.ReactNode;
  providers: string;
  highlight?: string;
}

export function CasinoGames({
  description,
  providers,
  highlight,
}: CasinoGamesProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm text-black">{description}</p>
        <p className="text-sm text-black">
          <span className="font-medium">Popular providers:</span> {providers}
        </p>
      </div>

      {highlight && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-100 font-bold text-[#FF3B30] px-4 py-3 rounded-lg text-sm">
          <img src="/icons/Component 1.png" className="w-6 h-6" />
          <span>{highlight}</span>
        </div>
      )}
    </div>
  );
}
