interface ScoreBadgeProps {
  score: number;
}

export default function ScoreBadge({ score }: ScoreBadgeProps) {
  return (
    <div
      className="absolute -top-2 -left-2 
                 bg-red-600 text-white text-xs font-bold 
                 rounded-full w-7 h-7 
                 flex items-center justify-center 
                 shadow-md"
    >
      {score}
    </div>
  );
}
