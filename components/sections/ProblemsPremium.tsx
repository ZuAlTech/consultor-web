"use client";

import { motion } from "framer-motion";
import { AlertCircle, BarChart3, Bug, Database, FileSpreadsheet, Workflow } from "lucide-react";

const problems = [
  {
    icon: Bug,
    text: "Sistemas internos lentos, inestables o con errores recurrentes",
  },
  {
    icon: FileSpreadsheet,
    text: "Reportes operativos que siguen dependiendo de Excel manual",
  },
  {
    icon: Workflow,
    text: "Procesos críticos sin trazabilidad ni automatización",
  },
  {
    icon: AlertCircle,
    text: "Cambios pendientes que el equipo interno no alcanza a atender",
  },
  {
    icon: Database,
    text: "Dependencia de una sola persona para soporte técnico",
  },
  {
    icon: BarChart3,
    text: "Falta de visibilidad clara sobre datos para tomar decisiones",
  },
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
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-sky-50 p-3">
                    <Icon className="h-5 w-5 text-sky-700" />
                  </div>
                  <p className="text-base leading-7 text-slate-700">{problem.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
