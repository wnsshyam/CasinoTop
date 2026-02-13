import { CheckCircle, BadgeCheck, Shield, Pencil } from "lucide-react";

export default function WhyTrustUs() {
  return (
    <section className=" max-w-5xl ">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-4">Why Trust Us</h2>

      {/* Description */}
      <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
        Our casino rankings are based on actual testing, payout tracking, mobile
        performance, and long-term reliability. We don’t sell placements — we
        earn them. Every review is verified by independent editors and matched
        against data from our bonus monitoring system.
      </p>

      {/* Cards */}
      <div className="max-w-3xl grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white border border-gray-200 rounded-xl px-6 py-5 flex items-center gap-4">
          {/* <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center"> */}
            <img
              src="/icons/Vector.png"
              alt="Expert reviewed"
              className="w-10 h-10 object-contain"
            />
          {/* </div> */}
          <span className="font-medium text-gray-800">Expert-reviewed</span>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-200 rounded-xl px-6 py-5 flex items-center gap-4">
          {/* <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center"> */}
            <img
              src="/icons/Bank Card.png"
              alt="Expert reviewed"
              className="w-10 h-10 object-contain"
            />
          {/* </div> */}
          <span className="font-medium text-gray-800">
            Payouts tested monthly
          </span>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-200 rounded-xl px-6 py-5 flex items-center gap-4">
          {/* <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center"> */}
            <img
              src="/icons/solid.png"
              alt="Expert reviewed"
              className="w-10 h-10 object-contain"
            />
          {/* </div> */}
          <span className="font-medium text-gray-800">
            Fully licensed and regulated
          </span>
        </div>
      </div>
    </section>
  );
}
