"use client";

import { motion } from "framer-motion";
import { BarChart3, BriefcaseBusiness, Cpu, FileSearch } from "lucide-react";

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Mantenimiento y mejora de sistemas empresariales",
    description:
      "Corrección de errores, soporte evolutivo, nuevos módulos, optimización de SQL Server y mejoras funcionales para sistemas existentes.",
  },
  {
    icon: Cpu,
    title: "Desarrollo de módulos internos en .NET",
    description:
      "Construcción de componentes administrativos y operativos para control, seguimiento y digitalización de procesos internos.",
  },
  {
    icon: BarChart3,
    title: "Automatización de reportes y dashboards",
    description:
      "Integración, limpieza, modelado y visualización de datos con SQL Server, Azure y Microsoft Fabric.",
  },
  {
    icon: FileSearch,
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
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-sky-500/10 p-3">
                    <Icon className="h-5 w-5 text-sky-300" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            ¿Tienes un sistema que requiere mejoras o un proceso que todavía depende de Excel?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 leading-7">
            Puedo ayudarte a revisar el caso, ordenar el alcance y proponer una ruta de solución clara.
          </p>
          <a
            href="#contacto"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Hablar sobre un proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
