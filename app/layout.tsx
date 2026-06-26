import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alejandro Altamirano | Consultor de sistemas y datos",
  description:
    "Consultor de desarrollo de software y datos. Mejora de sistemas empresariales, automatización de reportes y soporte técnico con .NET, SQL Server, Azure y Microsoft Fabric.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
