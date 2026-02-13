import { Banknote } from "lucide-react";

interface PaymentMethod {
  name: string;
  image: string;
}

export function CasinoPaymentMethods({
  methods,
  note,
}: {
  methods: PaymentMethod[];
  note: string;
}) {
  return (
    <div className="space-y-6">
      {/* Payment Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {methods.map((method, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-6 min-h-[120px]"
          >
            <div>
              <img
                src={method.image}
                alt={method.name}
                className="h-8 object-contain"
              />
            </div>

            <p className="text-sm text-gray-700 font-medium leading-snug">
              {method.name}
            </p>
          </div>
        ))}
      </div>

      {/* Note Box */}
      <div className="flex items-center gap-3 bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 text-sm text-gray-800">
        <img src="/icons/moneybag.png" className="w-6 h-6 shrink-0" />
        <p className="leading-relaxed text-black font-bold">{note}</p>
      </div>
    </div>
  );
}
