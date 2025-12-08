import Button from "@/components/Button";
import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { moulinPhotos } from "@/data/moulin-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("moulin");

export { generateMetadata };

const MoulinAHuilePage = async ({ params }: PageProp) => {
  const moulin = await getPageMessages(params);

  return (
    <>
      <PhotoCarousel slides={moulinPhotos} />
      <div className="fabric-surface-light description-page-layout">
        <h1>{moulin.title}</h1>
        <div className="flex flex-col gap-12 mb-12 md:mb-14 text-center">
          <p className="font-bold">{moulin.p1}</p>
          <p>{moulin.p2}</p>
          <p>{moulin.p3}</p>
        </div>
        <Button type="button">
          <a href="https://www.moulinstorckensohn.com/" target="_blank">
            {moulin.cta}
          </a>
        </Button>
      </div>
    </>
  );
};
export default MoulinAHuilePage;
