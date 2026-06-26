const cases = [
  {
    title: "Mejora de sistema interno existente",
    result:
      "Soporte evolutivo, corrección de errores y desarrollo de nuevas funcionalidades sobre plataformas ya en operación.",
  },
  {
    title: "Automatización de reporting",
    result:
      "Consolidación de datos operativos y transformación de reportes manuales en tableros más claros y accionables.",
  },
  {
    title: "Acompañamiento técnico y funcional",
    result:
      "Levantamiento de requerimientos, documentación y capacitación para alinear operación, usuarios y desarrollo.",
  },
];

export default function CaseStudies() {
  return (
    <section id="casos" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Casos de uso
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Tipos de proyectos en los que puedo aportar valor
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cases.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
