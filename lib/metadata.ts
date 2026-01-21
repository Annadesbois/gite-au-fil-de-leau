import { Metadata } from "next";

import { getMessages } from "@/lib/i18n";
import { locales } from "./i18n.config";
import type { Locale } from "./i18n.config";

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

export function createPageHelpers<K extends MessageKey>(
  messageKey: K,
  routeSegment?: string,
) {
  const generateMetadata = async ({ params }: PageProp): Promise<Metadata> => {
    const { locale } = await params;
    const localeTyped = locale as Locale;

    const messages = getMessages(localeTyped);
    const section = messages[messageKey] as Messages[K] & MetadataMessages;

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const path = routeSegment ? `/${routeSegment}` : "";
    const languages = Object.fromEntries(
      (locales as readonly Locale[]).map((l) => [l, `${baseUrl}/${l}${path}`]),
    );

    return {
      title: section.meta.title,
      description: section.meta.description,
      alternates: {
        canonical: `${baseUrl}/${localeTyped}${path}`,
        languages,
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
