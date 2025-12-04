import type { Metadata } from "next";

import PhotoCarousel from "@/components/carousel/PhotoCarousel";

import Button from "@/components/Button";
import { wesserlingPhotos } from "@/data/wesserling-photos";
import { getMessages, type Locale } from "@/lib/i18n";
import { title } from "process";
import { WesserlingMessages } from "@/types/i18n/wesserling";

type WesserlingPageProp = {
  params: Promise<{ locale: Locale }>;
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const messages = getMessages(locale);
  const wesserling = messages.wesserling as WesserlingMessages;

  return {
    title: wesserling.meta.title,
    description: wesserling.meta.description,
  };
};

const ParcDeWesserlingPage = async ({ params }: WesserlingPageProp) => {
  const { locale } = await params;
  const messages = getMessages(locale);
  const wesserling = messages.wesserling as WesserlingMessages;

  return (
    <>
      <PhotoCarousel slides={wesserlingPhotos} />
      <div className="relative fabric-surface-light p-6 pb-12 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1>{wesserling.title}</h1>
        <div className="flex flex-col gap-12 mb-12 md:mb-14 text-center">
          <p className="font-bold">{wesserling.intro1}</p>
          <p>{wesserling.intro2}</p>
          <p>{wesserling.intro3}</p>
          <p>{wesserling.intro4}</p>
        </div>
        <div className="content-area mb-10">
          <h2 className="font-bold">{wesserling.alsoTitle}</h2>
          <ul>
            <li>{wesserling.list.shops}</li>
            <li>{wesserling.list.creators}</li>
            <li>{wesserling.list.farmStore}</li>
            <li>{wesserling.list.enterpriseSpace}</li>
            <li>{wesserling.list.smallTheater}</li>
            <li>{wesserling.list.artistsResidence}</li>
          </ul>
        </div>
        <Button type="button">
          <a href="https://www.parc-wesserling.fr/" target="_blank">
            Découvrir
          </a>
        </Button>
      </div>
    </>
  );
};
export default ParcDeWesserlingPage;
