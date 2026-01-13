import { Metadata } from "next";

import { getMessages } from "@/lib/i18n";
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

export function createPageHelpers<K extends MessageKey>(messageKey: K) {
  const generateMetadata = async ({ params }: PageProp): Promise<Metadata> => {
    const { locale } = await params;
    const messages = getMessages(locale as Locale);
    const section = messages[messageKey] as Messages[K] & MetadataMessages;

    return {
      title: section.meta.title,
      description: section.meta.description,
    };
  };

  const getPageMessages = async (
    params: Promise<{ locale: string }>
  ): Promise<Messages[K]> => {
    const { locale } = await params;
    const messages = getMessages(locale as Locale) as Messages;
    return messages[messageKey];
  };

  return { generateMetadata, getPageMessages };
}
