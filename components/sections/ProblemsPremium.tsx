const problems = [
  "Sistemas internos lentos, inestables o con errores recurrentes",
  "Reportes operativos que siguen dependiendo de Excel manual",
  "Procesos críticos sin trazabilidad ni automatización",
  "Cambios pendientes que el equipo interno no alcanza a atender",
  "Dependencia de una sola persona para soporte técnico",
  "Falta de visibilidad clara sobre datos para tomar decisiones",
];

export default function ProblemsPremium() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Problemas que resuelvo
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Trabajo con empresas que necesitan orden técnico y soluciones útiles
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Si tu operación depende de sistemas internos, reportes manuales o datos dispersos,
            puedo ayudarte a estructurar una solución realista y ejecutable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-base leading-7 text-slate-700">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
