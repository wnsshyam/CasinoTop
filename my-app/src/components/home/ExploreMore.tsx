import { ArrowUpRight } from "lucide-react";

interface ExploreItem {
  title: string;
  image: string;
}

const items: ExploreItem[] = [
  {
    title: "Compare Fast Payout Casinos",
    image: "/icons/card.png",
  },
  {
    title: "Best US Mobile Casinos",
    image: "/icons/iPhone.png",
  },
  {
    title: "Responsible Gambling",
    image: "/icons/solidmind.png",
  },
];
export default function ExploreMore() {
  return (
    <section className="">
      <div className="max-w-3xl">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More</h2>

        {/* Items */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-4 hover:shadow-sm transition"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-gray-800 font-medium">{item.title}</span>
              </div>

              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-red-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
