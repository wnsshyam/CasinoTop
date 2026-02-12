import Link from "next/link";

export default function SwedenPage() {
  return (
    <div className="max-w-[1250px] mx-auto px-4 lg:px-6 mt-8 space-y-6">
      <h1 className="text-3xl font-bold">Best Casinos in Sweden</h1>

      <div className="space-y-4">
        <Link
          href="/sweden/lyrabet"
          className="block p-6 bg-white border rounded-xl hover:shadow"
        >
          LyraBet Casino Review
        </Link>

        <Link
          href="/sweden/casumo"
          className="block p-6 bg-white border rounded-xl hover:shadow"
        >
          Casumo Casino Review
        </Link>
      </div>
    </div>
  );
}
