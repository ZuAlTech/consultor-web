export default function ContactPremium() {
  return (
    <section id="contacto" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 to-slate-800 px-8 py-14 text-center text-white shadow-[0_25px_100px_rgba(15,23,42,0.20)] md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Contacto
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            ¿Tienes un sistema que necesita soporte, mejoras o automatización?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 leading-8">
            Puedo ayudarte a evaluar el problema, ordenar el alcance y proponer una solución realista para tu operación.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:zualtech@gmail.com"
              className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Solicitar diagnóstico
            </a>
            <a
              href="https://wa.me/525579961207"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-500 px-6 py-3 font-semibold text-white transition hover:border-white"
            >
              Escribirme por WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-500 px-6 py-3 font-semibold text-white transition hover:border-white"
            >
              Enviar correo / LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
