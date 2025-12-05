import { Metadata } from "next";
import { getMessages, type Locale } from "@/lib/i18n";
import type {
  PageProp,
  MetadataMessages,
  RandonneesMessages,
  ContactMessages,
  LacMessages,
  MoulinMessages,
  WesserlingMessages,
  VillageMessages,
  ReviewsMessages,
  HomeMessages,
  SejourMessages,
  AuroresMessages,
  CerisierMessages,
  GrangeMessages,
  SenteursMessages,
  //   BienEtreMessages,
  //   TarifsMessages,
  ResteMessages,
} from "@/types/i18n";

type Messages = {
  randonnees: RandonneesMessages;
  contact: ContactMessages;
  lac: LacMessages;
  moulin: MoulinMessages;
  wesserling: WesserlingMessages;
  village: VillageMessages;
  reviews: ReviewsMessages;
  home: HomeMessages;
  sejour: SejourMessages;
  aurores: AuroresMessages;
  cerisier: CerisierMessages;
  grange: GrangeMessages;
  senteurs: SenteursMessages;
  //   bienetre: BienEtreMessages;
  //   tarifs: TarifsMessages;
  reste: ResteMessages;
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
