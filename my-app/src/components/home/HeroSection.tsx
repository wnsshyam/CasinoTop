import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="bg-black rounded-2xl overflow-hidden pl-10 py-12 relative flex flex-col lg:flex-row items-center">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-white z-10">
          <h1 className="text-[32px] lg:text-[36px] font-semibold leading-[44px] mb-4">
            Best Online Casinos in Sweden 2025
          </h1>

          <p className="text-gray-300 text-[16px] leading-[26px] max-w-xl mb-8">
            Based on our expert reviews and internal performance data, here are
            the top-rated online casinos right now. These brands are fully
            licensed, mobile-optimized, and offer secure payouts.
          </p>

          <button className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-lg text-white font-medium text-[14px]">
            Compare Casinos
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 relative h-[250px] lg:h-[300px] mt-10 lg:mt-0">
          <Image
            src="/slots.png"
            alt="Casino Logos"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      </div>
    </section>
  );
}
