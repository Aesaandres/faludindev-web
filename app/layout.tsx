import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const geistMontserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "700"],
});
const geistPoppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Web de FaludinDev - Andrés Sánchez",
  description: "Portafolio de Andrés Sánchez, desarrollador frontend especializado en React y Next.js. Descubre mis proyectos, habilidades y cómo contactarme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistPoppins.variable} ${geistMontserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
