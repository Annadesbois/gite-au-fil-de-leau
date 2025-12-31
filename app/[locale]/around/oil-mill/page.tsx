import Button from "@/components/Button";
import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { millPhotos } from "@/data/mill-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("mill");

export { generateMetadata };

const millAHuilePage = async ({ params }: PageProp) => {
  const mill = await getPageMessages(params);

  return (
    <>
      <PhotoCarousel slides={millPhotos} />
      <div className="fabric-surface-light description-page-layout">
        <h1>{mill.title}</h1>
        <div className="flex flex-col gap-12 mb-12 md:mb-14 text-center">
          <p className="font-bold">{mill.p1}</p>
          <p>{mill.p2}</p>
          <p>{mill.p3}</p>
        </div>
        <Button type="button">
          <a href="https://www.millstorckensohn.com/" target="_blank">
            {mill.cta}
          </a>
        </Button>
      </div>
    </>
  );
};
export default millAHuilePage;
