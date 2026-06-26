const steps = [
  {
    title: "Diagnóstico",
    description:
      "Reviso el problema actual, el flujo operativo, el contexto técnico y el impacto real en el negocio.",
  },
  {
    title: "Definición de alcance",
    description:
      "Alineamos prioridades, entregables, tiempos estimados y la mejor forma de trabajo según el proyecto.",
  },
  {
    title: "Ejecución",
    description:
      "Implemento mejoras, módulos, soporte o automatización con foco en utilidad real y estabilidad.",
  },
  {
    title: "Seguimiento",
    description:
      "Entrego documentación, capacitación y acompañamiento para asegurar adopción y continuidad.",
  },
];

export default function ProcessPremium() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Método de trabajo
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Claridad técnica y ejecución estructurada
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-sky-700">0{index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
