interface CasinoFeatureListProps {
  intro?: string;
  items: string[];
}

export function CasinoFeatureList({ intro, items }: CasinoFeatureListProps) {
  return (
    <div className="space-y-4">
      {/* Intro Text */}
      {intro && (
        <p className="text-sm text-gray-900 font-medium leading-relaxed">
          {intro}
        </p>
      )}

      {/* Feature List */}
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <img
              src="/icons/circle.png"
              className="w-5 h-5 mt-0.5"
              alt="icon"
            />
            <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
