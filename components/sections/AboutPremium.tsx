export default function AboutPremium() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Sobre mí
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Perfil técnico con visión funcional y enfoque empresarial
          </h2>

          <div className="mt-6 space-y-4 text-slate-300 leading-8">
            <p>
              Soy Alejandro Altamirano, Ingeniero en Computación con experiencia en
              desarrollo de software, mejora de sistemas y automatización de datos
              para entornos empresariales.
            </p>
            <p>
              Mi enfoque combina análisis funcional, ejecución técnica y acompañamiento
              a usuarios para entregar soluciones útiles, estables y alineadas al negocio.
            </p>
            <p>
              He participado en proyectos para instituciones públicas, consultoras
              y banca, trabajando con C#, ASP.NET, SQL Server, Azure, GeneXus y
              Microsoft Fabric.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8">
          <p className="text-sm text-sky-300">Áreas clave</p>
          <ul className="mt-4 space-y-4 text-slate-200">
            <li>• Desarrollo y mejora de sistemas empresariales</li>
            <li>• Automatización de reportes y datos</li>
            <li>• SQL Server, Azure y Microsoft Fabric</li>
            <li>• Levantamiento de requerimientos</li>
            <li>• Publicación, documentación y capacitación</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
