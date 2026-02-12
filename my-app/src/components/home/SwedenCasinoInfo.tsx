export default function SwedenCasinoInfo() {
  return (
    <section className=" py-14 rounded-xl">
      <div className="max-w-3xl ">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Looking for the best online casinos in Sweden?
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-600 leading-relaxed mb-6">
          You’re not alone. With stricter regulation and fewer license-free
          options, finding trustworthy operators in 2025 requires more than just
          reading terms and conditions.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          We evaluate each brand based on:
        </p>

        {/* Bullet List */}
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-red-500"></span>
            <span className="text-gray-700">
              Licensing and regulatory history
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-red-500"></span>
            <span className="text-gray-700">
              Bonus transparency and wagering terms
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-red-500"></span>
            <span className="text-gray-700">
              Speed of withdrawals (especially Swish and Trustly)
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-red-500"></span>
            <span className="text-gray-700">
              Player feedback and technical uptime
            </span>
          </li>
        </ul>

        {/* Footer Text */}
        <p className="text-gray-600 leading-relaxed">
          Our guides are updated monthly and written by local experts like{" "}
          <span className="text-red-600 underline cursor-pointer">
            Lina Meyer
          </span>
          . Explore our bonus pages, payout comparisons, and responsible
          gambling tools for more insight.
        </p>
      </div>
    </section>
  );
}
