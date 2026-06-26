const testimonials = [
  {
    quote:
      "Alejandro combina capacidad técnica con entendimiento funcional, lo que facilita convertir necesidades del área en soluciones utilizables.",
    name: "Perfil de cliente / líder de proyecto",
    role: "Referencia profesional",
  },
  {
    quote:
      "Aporta orden, seguimiento y criterio técnico. No solo ejecuta tareas: ayuda a estructurar mejor el trabajo.",
    name: "Perfil de equipo / consultoría",
    role: "Referencia profesional",
  },
  {
    quote:
      "Su experiencia en sistemas, bases de datos y acompañamiento a usuarios genera confianza en proyectos donde se requiere continuidad.",
    name: "Perfil institucional / corporativo",
    role: "Referencia profesional",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Testimonios
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Percepción de valor que busco generar en cada proyecto
          </h2>
          <p className="mt-4 text-slate-600">
            Puedes reemplazar estos textos por testimonios reales en cuanto empieces
            a pedir referencias formales a colegas, jefes o clientes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.quote}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-slate-950">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
