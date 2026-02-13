import Image from "next/image";

const articles = [
  {
    id: 1,
    author: "Lina Meyer",
    title: "Casinon med EU-licens 2025",
    desc: "At casinos with an EU license, you can play safely and securely without a US license, while also enjoying tax...",
    time: "3 min read",
    updated: "Updated: June 2025",
    avatar: "/avatar.jpg",
    thumbnail: "/casino-thumb.png",
  },
  {
    id: 2,
    author: "Lina Meyer",
    title: "Casinon med EU-licens 2025",
    desc: "At casinos with an EU license, you can play safely and securely without a US license, while also enjoying tax...",
    time: "3 min read",
    updated: "Updated: June 2025",
    avatar: "/avatar.jpg",
    thumbnail: "/casino-thumb.png",
  },
  {
    id: 3,
    author: "Lina Meyer",
    title: "Casinon med EU-licens 2025",
    desc: "At casinos with an EU license, you can play safely and securely without a US license, while also enjoying tax...",
    time: "3 min read",
    updated: "Updated: June 2025",
    avatar: "/avatar.jpg",
    thumbnail: "/casino-thumb.png",
  },
];

export default function LatestArticles() {
  return (
    <div className="w-full">
      <h3 className="text-[14px] font-semibold text-gray-500 mb-6 tracking-wide">
        LATEST ARTICLE
      </h3>

      <div className="space-y-5">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white border  rounded-xl p-4 flex justify-between gap-4 hover:shadow-sm transition"
            style={{ borderColor: "#E5E7E8" }}
          >
            {/* Left Content */}
            <div className="flex-1">
              {/* Author */}
              <div className="flex items-center gap-2 text-[13px] text-gray-500 mb-2">
                <Image
                  src="/lina-meyer-150x150 1.png"
                  alt="author"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span>{article.author}</span>
              </div>

              {/* Title */}
              <h4 className="text-[15px] font-semibold text-black mb-2 leading-5">
                {article.title}
              </h4>

              {/* Description */}
              <p className="text-[13px] text-gray-600 leading-5 mb-2">
                {article.desc}
              </p>

              {/* Meta */}
              <p className="text-[12px] text-gray-400 mb-2">
                {article.time} · {article.updated}
              </p>

              {/* Read Link */}
              <p className="text-red-500 text-[13px] font-medium cursor-pointer">
                Read Full Guide →
              </p>
            </div>

            {/* Thumbnail */}
            <div className="w-[70px] h-[90px] relative">
              <Image
                src="/image.png"
                alt="thumbnail"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
