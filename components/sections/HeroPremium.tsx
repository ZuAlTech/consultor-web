"use client";

import { motion } from "framer-motion";
import { BarChart3, BriefcaseBusiness, DatabaseZap } from "lucide-react";

export default function HeroPremium() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.12),_transparent_30%),radial-gradient(circle_at_left,_rgba(6,182,212,0.10),_transparent_25%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
            Consultoría técnica para empresas
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
            Ayudo a empresas a mejorar sistemas, automatizar reportes y reducir fricción operativa
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Consultoría técnica para empresas que necesitan soporte evolutivo, desarrollo de módulos,
            automatización de datos y mayor claridad operativa con .NET, SQL Server, Azure y Microsoft Fabric.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-full bg-slate-950 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
            >
              Solicitar diagnóstico
            </a>
            <a
              href="#servicios"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-900 transition hover:border-slate-900"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-bold text-slate-950">4+ años</p>
              <p className="text-sm text-slate-600">liderando y entregando soluciones</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-950">.NET + SQL</p>
              <p className="text-sm text-slate-600">stack empresarial principal</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-950">Azure / Fabric</p>
              <p className="text-sm text-slate-600">datos, cloud y reporting</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm text-sky-300">Qué aporto</p>
              <h3 className="mt-2 text-2xl font-bold">
                Soluciones útiles para operación, soporte y crecimiento
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                No solo desarrollo software: ayudo a estructurar necesidades del negocio,
                convertirlas en soluciones funcionales y dar continuidad técnica a sistemas que ya están en operación.
              </p>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness className="h-5 w-5 text-sky-700" />
                  <p className="font-semibold text-slate-900">Sistemas empresariales</p>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Mantenimiento, mejora, soporte evolutivo y nuevos módulos.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-sky-700" />
                  <p className="font-semibold text-slate-900">Datos y reporting</p>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Dashboards, integración de datos y automatización de reportes.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-3">
                  <DatabaseZap className="h-5 w-5 text-sky-700" />
                  <p className="font-semibold text-slate-900">Consultoría técnica</p>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Requerimientos, documentación, coordinación y acompañamiento.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
