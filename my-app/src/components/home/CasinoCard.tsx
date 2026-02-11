interface Props {
  name: string;
  rating: number;
  bonus: string;
}

export default function CasinoCard({ name, rating, bonus }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border">
      {/* Left */}
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-red-500 font-medium mt-1">{bonus}</p>
        <p className="text-sm text-gray-500 mt-1">Rating: {rating} ⭐</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md text-sm">
          Claim Bonus
        </button>
        <button className="text-red-500 text-sm font-medium">
          Read Review
        </button>
      </div>
    </div>
  );
}
