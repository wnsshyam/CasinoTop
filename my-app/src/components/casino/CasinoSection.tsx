interface CasinoSectionProps {
  title: string;
  children: React.ReactNode;
}

export function CasinoSection({ title, children }: CasinoSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      {children}
    </section>
  );
}
