import Button from "@/components/Button";
import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { lacPhotos } from "@/data/lac-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("lac");

export { generateMetadata };

const LacDeKruthWildenstein = async ({ params }: PageProp) => {
  const lac = await getPageMessages(params);
  return (
    <>
      <PhotoCarousel slides={lacPhotos} />
      <div className="relative fabric-surface-light p-6 pb-12 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1>{lac.title}</h1>
        <div className="flex flex-col gap-12 mb-12 md:mb-14 text-center">
          <p className="font-bold">{lac.p1}</p>
          <p>{lac.p2}</p>
          <p>{lac.p3}</p>
        </div>
        <div className="content-area mb-10">
          <h2 className="font-bold">{lac.activities.title}</h2>
          <ul>
            <li>{lac.activities.items.fishing}</li>
            <li>{lac.activities.items.canoe}</li>
            <li>{lac.activities.items.camping}</li>
            <li>{lac.activities.items.treePark}</li>
            <li>{lac.activities.items.bikeRental}</li>
            <li>{lac.activities.items.geocaching}</li>
            <li>{lac.activities.items.loop}</li>
            <li>{lac.activities.items.food}</li>
          </ul>
        </div>
        <Button type="button">
          <a href="https://lac-kruth-wildenstein.fr/" target="_blank">
            {lac.cta}
          </a>
        </Button>
      </div>
    </>
  );
};
export default LacDeKruthWildenstein;
