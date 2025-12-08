import Button from "@/components/Button";
import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { randonneesPhotos } from "@/data/randonnees-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("randonnees");

export { generateMetadata };

const RandonneesPage = async ({ params }: PageProp) => {
  const rando = await getPageMessages(params);

  return (
    <>
      <PhotoCarousel slides={randonneesPhotos} />
      <div className="fabric-surface-light description-page-layout">
        <h1>{rando.title}</h1>
        <div className="flex flex-col gap-12 mb-12 md:mb-14 text-center">
          <p className="font-bold">{rando.intro1}</p>
          <p>{rando.intro2}</p>
          <p>{rando.intro3}</p>
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
