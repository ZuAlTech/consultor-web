const services = [
  {
    title: "Mantenimiento y mejora de sistemas empresariales",
    description:
      "Corrección de errores, soporte evolutivo, nuevos módulos, optimización de SQL Server y mejoras funcionales para sistemas existentes.",
  },
  {
    title: "Desarrollo de módulos internos en .NET",
    description:
      "Construcción de componentes administrativos y operativos para control, seguimiento y digitalización de procesos internos.",
  },
  {
    title: "Automatización de reportes y dashboards",
    description:
      "Integración, limpieza, modelado y visualización de datos con SQL Server, Azure y Microsoft Fabric.",
  },
  {
    title: "Consultoría técnica externa",
    description:
      "Levantamiento de requerimientos, análisis funcional, documentación, capacitación y acompañamiento técnico para equipos y empresas.",
  },
];

export default function ServicesPremium() {
  return (
    <section id="servicios" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Servicios
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Soluciones enfocadas en operación, continuidad y visibilidad
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Estas son las principales formas en las que apoyo a empresas y consultoras.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
