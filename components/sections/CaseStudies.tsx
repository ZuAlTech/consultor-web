"use client";

import { motion } from "framer-motion";
import { ArrowRightLeft, BarChart3, LifeBuoy } from "lucide-react";

const cases = [
  {
    icon: LifeBuoy,
    title: "Mejora de sistema interno existente",
    result:
      "Apoyo a organizaciones que ya cuentan con una aplicación en operación pero necesitan resolver incidencias, mejorar estabilidad y evolucionar funcionalidades sin detener la operación.",
  },
  {
    icon: BarChart3,
    title: "Automatización de reporting",
    result:
      "Intervengo en escenarios donde la información sigue consolidándose de forma manual, ayudando a estructurar datos, automatizar reportes y dar mayor visibilidad a la operación.",
  },
  {
    icon: ArrowRightLeft,
    title: "Acompañamiento técnico y funcional",
    result:
      "Participo en proyectos que requieren traducir necesidades del negocio en entregables claros, con levantamiento de requerimientos, documentación y acompañamiento a usuarios.",
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
          {cases.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-sky-50 p-3">
                    <Icon className="h-5 w-5 text-sky-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                </div>
                <p className="mt-4 leading-7 text-slate-600">{item.result}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
