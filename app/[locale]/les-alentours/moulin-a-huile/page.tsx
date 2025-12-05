import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import Button from "@/components/Button";
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
      <div className="relative fabric-surface-light p-6 pb-12 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
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
