import type { Metadata } from "next";

import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { randonneesPhotos } from "@/data/randonnees-photos";
import Button from "@/components/Button";
import { getMessages, type Locale } from "@/lib/i18n";
import { RandonneesMessages } from "@/types/i18n/rando";

type RandonneesPageProps = {
  params: Promise<{ locale: Locale }>;
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const messages = getMessages(locale);
  const rando = messages.randonnees as RandonneesMessages;

  return {
    title: rando.meta.title,
    description: rando.meta.description,
  };
};

const RandonneesPage = async ({ params }: RandonneesPageProps) => {
  const { locale } = await params;
  const messages = getMessages(locale);
  const rando = messages.randonnees as RandonneesMessages;

  return (
    <>
      <PhotoCarousel slides={randonneesPhotos} />
      <div className="relative fabric-surface-light p-6 pb-12 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1>{rando.title}</h1>
        <div className="flex flex-col gap-12 mb-12 md:mb-14 text-center">
          <p className="font-bold">
            {rando.intro1}
          </p>
          <p>
            {rando.intro2}
          </p>
          <p>
            {rando.intro3}
          </p>
        </div>
        <Button type="button">
          <a
            href="https://www.outdooractive.com/fr/routes/#area=1613358&bm=osm%3Asummer&caml=9y3,15ffyt,7x0xec,0,0&cat=Randonn%C3%A9e&filter=r-fullyTranslatedLangus-fr,r-openState-,sb-sortedBy-0&q=Storckensohn%20(Haut-Rhin,%20Grand%20Est,%20France)&view=map&wt=Storckensohn%20(Haut-Rhin,%20Grand%20Est,%20France)%0A1613358&zc=13.89091,6.95848,47.87338"
            target="_blank"
          >
            {rando.cta}
          </a>
        </Button>
      </div>
    </>
  );
};
export default RandonneesPage;
