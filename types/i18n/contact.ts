import type { Locale } from "@/lib/i18n";

export type ContactPageProps = {
  params: { locale: Locale };
};

export type ContactMessages = {
  meta: {
    title: string;
    description: string;
  };
  title: string;
  map: string;
  info: string;
  reservation: string;
};
