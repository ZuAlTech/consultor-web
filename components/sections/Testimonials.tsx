"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Alejandro destaca por su capacidad para entender la necesidad funcional y aterrizarla técnicamente con orden, claridad y seguimiento.",
    name: "Líder de proyecto / entorno institucional",
    role: "Referencia profesional sugerida",
  },
  {
    quote:
      "Aporta criterio técnico, estructura de trabajo y buena comunicación con usuarios y equipos, lo que ayuda a dar continuidad real a los proyectos.",
    name: "Consultoría / coordinación técnica",
    role: "Referencia profesional sugerida",
  },
  {
    quote:
      "Su combinación de desarrollo, análisis y acompañamiento funcional genera confianza en proyectos donde la estabilidad y la entrega son clave.",
    name: "Cliente interno / responsable operativo",
    role: "Referencia profesional sugerida",
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
            Cómo busco ser percibido en cada proyecto
          </h2>
          <p className="mt-4 text-slate-600">
            Estos textos ya están redactados con un tono más realista. Después puedes sustituirlos por testimonios reales de colegas, líderes o clientes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.quote}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-slate-950">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
