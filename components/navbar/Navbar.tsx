import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import type { Locale } from "@/lib/i18n";

type NavbarHomeMessages = {
  label: string;
};

type NavbarGiteMessages = {
  label: string;
  sejour: string;
  chambreCerisier: string;
  chambreGrange: string;
  chambreAurores: string;
  chambreJardinDesSenteurs: string;
  bienEtre: string;
};

type NavbarAlentoursMessages = {
  label: string;
  village: string;
  randonnees: string;
  wesserling: string;
  moulin: string;
  lac: string;
  leReste: string;
};

type NavbarSimpleSectionMessages = {
  label: string;
};

export type NavbarMessages = {
  home: NavbarHomeMessages;
  gite: NavbarGiteMessages;
  alentours: NavbarAlentoursMessages;
  tarifs: NavbarSimpleSectionMessages;
  avis: NavbarSimpleSectionMessages;
  contact: NavbarSimpleSectionMessages;
};

type NavbarProps = {
  locale: Locale;
  messages: NavbarMessages;
};

const Navbar = ({ locale, messages }: NavbarProps) => {
  const base = `/${locale}`;

  return (
    <nav className="grid grid-cols-[1fr_2fr_1fr] md:flex md:justify-center h-16 w-full relative fabric-surface-light">
      <div className="md:hidden flex items-center ml-4">
        <MobileMenu locale={locale} messages={messages} />
      </div>
      <Link
        href={base}
        className="flex items-center justify-center md:justify-start md:ml-4 "
      >
        <h1 className="font-bold text-2xl whitespace-nowrap text-secondary">
          Gîte Au fil de l'eau
        </h1>
      </Link>
      <div className="hidden md:flex md:items-center md:justify-end w-full md:mr-4">
        <DesktopMenu locale={locale} messages={messages} />
      </div>
    </nav>
  );
};
export default Navbar;
