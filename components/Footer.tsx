export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-950">Alejandro Altamirano</p>
          <p className="text-sm text-slate-600">
            Consultoría técnica para sistemas empresariales y datos
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-slate-600 md:items-end">
          <a href="mailto:zualtech@gmail.com" className="hover:text-slate-950">
            zualtech@gmail.com
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-slate-950">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
