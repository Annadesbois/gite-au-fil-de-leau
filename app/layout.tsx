import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

import { PlaypenSans } from "./fonts/playpen-sans";
import { Courgette } from "./fonts/courgette";

export const metadata: Metadata = {
  title: "Gîte Au fil de l'eau",
  description: "Gîte chaleureux à Storckensohn, au cœur des Hautes-Vosges d'Alsace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PlaypenSans.variable} ${Courgette.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
