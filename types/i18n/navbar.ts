import type { Locale } from "@/lib/i18n.config";

export type NavbarHomeMessages = {
  label: string;
};

export type NavbarGiteMessages = {
  label: string;
  livingRoom: string;
  cerisierRoom: string;
  grangeRoom: string;
  auroresRoom: string;
  sousBoisRoom: string;
  wellness: string;
  price: string;
};

export type NavbarAroundMessages = {
  label: string;
  village: string;
  hiking: string;
  wesserling: string;
  mill: string;
  lake: string;
  everythingElse: string;
};

export type NavbarSimpleSectionMessages = {
  label: string;
};

export type NavbarMessages = {
  home: NavbarHomeMessages;
  gite: NavbarGiteMessages;
  around: NavbarAroundMessages;
  price: NavbarSimpleSectionMessages;
  reviews: NavbarSimpleSectionMessages;
  contact: NavbarSimpleSectionMessages;
};

export type NavbarProps = {
  locale: Locale;
  messages: NavbarMessages;
};
