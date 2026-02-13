import { Check, AlertCircle } from "lucide-react";

export function CasinoProsCons({
  pros,
  cons,
}: {
  pros: string[];
  cons: string[];
}) {
  const maxRows = Math.max(pros.length, cons.length);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      {/* Header */}
      <div className="grid grid-cols-2 bg-gray-100 text-sm font-semibold text-black">
        <div className="p-4 border-r border-gray-200">Pros</div>
        <div className="p-4">Cons</div>
      </div>

      {/* Rows */}
      {Array.from({ length: maxRows }).map((_, i) => (
        <div key={i} className="grid grid-cols-2 border-t border-gray-200">
          {/* Pros Cell */}
          <div className="p-4 border-r border-gray-200">
            {pros[i] && (
              <div className="flex items-start gap-2 text-sm text-gray-700">
                <img src="/icons/Tick Square.png" className="w-6 h-6 " />
                <span>{pros[i]}</span>
              </div>
            )}
          </div>

          {/* Cons Cell */}
          <div className="p-4">
            {cons[i] && (
              <div className="flex items-start gap-2 text-sm text-gray-700">
                <img
                  src="/icons/Error Diamond.png"
                  className="w-6 h-6"
                />
                <span>{cons[i]}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
