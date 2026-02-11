import CasinoCard from "./CasinoCard";

const casinos = [
  {
    name: "SlotsLV",
    rating: 5.0,
    bonus: "200% up to $3,000 + 30 free spins",
  },
  {
    name: "Decode Casino",
    rating: 4.9,
    bonus: "$100 free bonus on your $25+ deposit",
  },
  {
    name: "RedStag Casino",
    rating: 5.0,
    bonus: "200% up to $3,000 + 50 free spins",
  },
];

export default function TopCasinoList() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-12">
      <h2 className="text-2xl font-bold mb-6">Top Casinos</h2>

      <div className="space-y-6">
        {casinos.map((casino, index) => (
          <CasinoCard key={index} {...casino} />
        ))}
      </div>
    </section>
  );
}
