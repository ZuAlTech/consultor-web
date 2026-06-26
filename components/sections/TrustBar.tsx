const items = [
  "Secretaría de Marina",
  "Banorte",
  "LCG IT & Consulting",
  "Consejo de la Judicatura Federal",
];

export default function TrustBar() {
  return (
    <section id="experiencia" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Experiencia en entornos institucionales, consultoría y banca
        </p>

        <div className="mt-6 grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 font-medium text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
