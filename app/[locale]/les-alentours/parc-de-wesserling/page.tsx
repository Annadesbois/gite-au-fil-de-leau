import Button from "@/components/Button";
import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { wesserlingPhotos } from "@/data/wesserling-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("wesserling");

export { generateMetadata };

const ParcDeWesserlingPage = async ({ params }: PageProp) => {
  const wesserling = await getPageMessages(params);

  return (
    <>
      <PhotoCarousel slides={wesserlingPhotos} />
      <div className="fabric-surface-light description-page-layout">
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
            {wesserling.cta}
          </a>
        </Button>
      </div>
    </>
  );
};
export default ParcDeWesserlingPage;
