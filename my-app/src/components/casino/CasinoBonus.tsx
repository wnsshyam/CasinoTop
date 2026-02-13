interface BonusProps {
  newBonus: React.ReactNode;
  newTerms: string;
  existingBonus: string;
}

export function CasinoBonus({ newBonus, newTerms, existingBonus }: BonusProps) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
      {/* Header Row */}
      <div className="grid md:grid-cols-2 bg-gray-100 text-sm font-semibold text-gray-800">
        <div className="px-6 py-4 border-r border-gray-200">New Players</div>
        <div className="px-6 py-4">Existing players</div>
      </div>

      {/* Content Row */}
      <div className="grid md:grid-cols-2">
        {/* New Players Content */}
        <div className="px-6 py-6 border-r border-gray-200 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Bonus
            </p>
            <p className="text-sm text-gray-800 leading-relaxed">{newBonus}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Terms
            </p>
            <p className="text-sm text-gray-700">{newTerms}</p>
          </div>
        </div>

        {/* Existing Players Content */}
        <div className="px-6 py-6">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Bonus
          </p>
          <p className="text-sm text-gray-800 leading-relaxed">
            {existingBonus}
          </p>
        </div>
      </div>
    </div>
  );
}
