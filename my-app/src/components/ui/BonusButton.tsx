import { Gift } from "lucide-react";

interface BonusButtonProps {
  label?: string;
  onClick?: () => void;
}

export default function BonusButton({
  label = "Claim Bonus",
  onClick,
}: BonusButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200 
                 text-white px-5 py-2.5 rounded-lg font-semibold text-sm 
                 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
    >
      <Gift className="w-4 h-4" />
      {label}
    </button>
  );
}
