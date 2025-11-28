import type { Metadata } from "next";
import "../globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

import { PlaypenSans } from "../fonts/playpen-sans";
import { Courgette } from "../fonts/courgette";

import { locales, type Locale, getMessages } from "@/lib/i18n";

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export const metadata: Metadata = {
  title: "Gîte Au fil de l'eau",
  description:
    "Gîte chaleureux à Storckensohn, au cœur des Hautes-Vosges d'Alsace.",
};

const RootLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) => {
  const messages = getMessages(params.locale);
  const navbarMessages = messages.navbar as Record<string, unknown>;
  const footerMessages = messages.footer as Record<string, unknown>;

  return (
    <html lang={params.locale}>
      <body
        className={`${PlaypenSans.variable} ${Courgette.variable} antialiased flex flex-col min-h-screen`}
      >
        <header>
          <Navbar locale={params.locale} messages={navbarMessages} />
        </header>

        <main className="relative grow mx-auto w-full max-w-6xl px-3 md:px-10">
          {children}
        </main>

        <Footer locale={params.locale} messages={footerMessages} />
      </body>
    </html>
  );
};

export default RootLayout;
