import type { Metadata } from "next";
import "../globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

import { PlaypenSans } from "../fonts/playpen-sans";
import { Courgette } from "../fonts/courgette";

import type { NavbarMessages } from "@/types/i18n/navbar";
import { locales, type Locale, getMessages } from "@/lib/i18n";

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const messages = getMessages(locale);
  const root = messages.rootLayout as {
    title?: string;
    description?: string;
  };

  return {
    title: root?.title ?? "Gîte Au fil de l'eau",
    description:
      root?.description ??
      "Gîte chaleureux à Storckensohn, au cœur des Hautes-Vosges d'Alsace.",
  };
};

const RootLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;

  const messages = getMessages(locale);
  const navbarMessages = messages.navbar as NavbarMessages;
  const footerMessages = messages.footer as Record<string, unknown>;

  return (
    <html lang={locale}>
      <body
        className={`${PlaypenSans.variable} ${Courgette.variable} antialiased flex flex-col min-h-screen`}
      >
        <header className="sticky top-0 z-40 shadow">
          <Navbar locale={locale} messages={navbarMessages} />
        </header>

        <main className="relative grow mx-auto w-full max-w-6xl px-3 md:px-10">
          {children}
        </main>

        <Footer locale={locale} messages={footerMessages} />
      </body>
    </html>
  );
};

export default RootLayout;
