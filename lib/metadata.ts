import { Metadata } from "next";

import { getMessages } from "@/lib/i18n";
import { locales, type Locale } from "./i18n.config";

import type {
  PageProp,
  MetadataMessages,
  HikingMessages,
  ContactMessages,
  LakeMessages,
  MillMessages,
  WesserlingMessages,
  VillageMessages,
  ReviewsMessages,
  HomeMessages,
  LivingRoomMessages,
  AuroresMessages,
  CerisierMessages,
  GrangeMessages,
  SenteursMessages,
  WellnessMessages,
  PriceMessages,
  ElseMessages,
} from "@/types/i18n";

type Messages = {
  hiking: HikingMessages;
  contact: ContactMessages;
  lake: LakeMessages;
  mill: MillMessages;
  wesserling: WesserlingMessages;
  village: VillageMessages;
  reviews: ReviewsMessages;
  home: HomeMessages;
  livingRoom: LivingRoomMessages;
  aurores: AuroresMessages;
  cerisier: CerisierMessages;
  grange: GrangeMessages;
  senteurs: SenteursMessages;
  wellness: WellnessMessages;
  price: PriceMessages;
  else: ElseMessages;
};

type MessageKey = keyof Messages;

type OgImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

export function createPageHelpers<K extends MessageKey>(
  messageKey: K,
  routeSegment: string = messageKey,
  ogImage?: OgImage,
) {
  const generateMetadata = async ({ params }: PageProp): Promise<Metadata> => {
    const { locale } = await params;
    const localeTyped = locale as Locale;

    const messages = getMessages(localeTyped);
    const section = messages[messageKey] as Messages[K] & MetadataMessages;

    const pagePath = routeSegment ? `/${routeSegment}` : "";
    const canonical = `/${localeTyped}${pagePath}`;

    const languages = Object.fromEntries(
      locales.map((l) => [l, `/${l}${pagePath}`]),
    );

    const image: OgImage = ogImage ?? {
      url: "/og/default.jpg",
      width: 1200,
      height: 630,
      alt: "Gîte Au fil de l'eau à Storckensohn (Alsace) – spa & sauna",
    };

    return {
      title: section.meta.title,
      description: section.meta.description,

      alternates: {
        canonical,
        languages,
      },

      openGraph: {
        title: section.meta.title,
        description: section.meta.description,
        url: canonical,
        siteName: "Gîte Au fil de l'eau",
        locale: localeTyped,
        type: "website",
        images: [image],
      },

      twitter: {
        card: "summary_large_image",
        title: section.meta.title,
        description: section.meta.description,
        images: [image.url],
      },
    };
  };

  const getPageMessages = async (
    params: Promise<{ locale: string }>,
  ): Promise<Messages[K]> => {
    const { locale } = await params;
    const messages = getMessages(locale as Locale) as Messages;
    return messages[messageKey];
  };

  return { generateMetadata, getPageMessages };
}