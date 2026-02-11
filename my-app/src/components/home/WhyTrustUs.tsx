export default function WhyTrustUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-16">
      <h2 className="text-xl font-bold mb-6">Why Trust Us</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-5">
          <h4 className="font-semibold mb-2">Expert Reviewed</h4>
          <p className="text-sm text-gray-600">
            Every casino is tested and verified by professionals.
          </p>
        </div>

        <div className="border rounded-lg p-5">
          <h4 className="font-semibold mb-2">Payouts Tested</h4>
          <p className="text-sm text-gray-600">
            We verify payout speed and fairness monthly.
          </p>
        </div>

        <div className="border rounded-lg p-5">
          <h4 className="font-semibold mb-2">Fully Licensed</h4>
          <p className="text-sm text-gray-600">
            All casinos are fully regulated and licensed.
          </p>
        </div>
      </div>
    </section>
  );
}
