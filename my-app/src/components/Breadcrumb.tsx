import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="  ">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center gap-2 text-[14px] py-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800 transition"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-800">{item.label}</span>
              )}

              {index !== items.length - 1 && (
                <span className="text-gray-400">&gt;</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
