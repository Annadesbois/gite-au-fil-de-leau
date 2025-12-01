import type { Locale } from "@/lib/i18n";

export type FooterMessages = {
  giteDeFranceAria: string;
  giteDeFranceAlt: string;
  tourismeHandicapAria: string;
  tourismeHandicapAlt: string;
};

export type FooterProps = {
  locale: Locale;
  messages: Record<string, unknown>;
};
