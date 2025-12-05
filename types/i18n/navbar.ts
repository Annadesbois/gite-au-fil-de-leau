import type { Locale } from "@/lib/i18n";

export type NavbarHomeMessages = {
  label: string;
};

export type NavbarGiteMessages = {
  label: string;
  sejour: string;
  chambreCerisier: string;
  chambreGrange: string;
  chambreAurores: string;
  chambreJardinDesSenteurs: string;
  bienEtre: string;
  tarifs: string;
};

export type NavbarAlentoursMessages = {
  label: string;
  village: string;
  randonnees: string;
  wesserling: string;
  moulin: string;
  lac: string;
  leReste: string;
};

export type NavbarSimpleSectionMessages = {
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

export type NavbarProps = {
  locale: Locale;
  messages: NavbarMessages;
};
