import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import KibbleScrollBackground from "@/components/KibbleScrollBackground";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caregiver's Table - PataMarket",
  description:
    "PataMarket – La tienda de mascotas con la mejor selección de alimentos, accesorios, farmacia y más. Envío gratis y 5% de recompensas con PataMarket Plus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${hankenGrotesk.variable} bg-surface font-sans text-on-surface relative`}
      >
        <KibbleScrollBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
