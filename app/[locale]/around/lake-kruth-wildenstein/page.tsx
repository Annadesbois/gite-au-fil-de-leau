import Button from "@/components/Button";
import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { lakePhotos } from "@/data/lake-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("lake");

export { generateMetadata };

const LakeDeKruthWildenstein = async ({ params }: PageProp) => {
  const lake = await getPageMessages(params);
  return (
    <>
      <PhotoCarousel slides={lakePhotos} />
      <div className="fabric-surface-light description-page-layout">
        <h1>{lake.title}</h1>
        <div className="flex flex-col gap-12 mb-12 md:mb-14 text-center">
          <p className="font-bold">{lake.p1}</p>
          <p>{lake.p2}</p>
          <p>{lake.p3}</p>
        </div>
        <div className="content-area mb-10">
          <h2 className="font-bold">{lake.activities.title}</h2>
          <ul>
            <li>{lake.activities.items.fishing}</li>
            <li>{lake.activities.items.canoe}</li>
            <li>{lake.activities.items.camping}</li>
            <li>{lake.activities.items.treePark}</li>
            <li>{lake.activities.items.bikeRental}</li>
            <li>{lake.activities.items.geocaching}</li>
            <li>{lake.activities.items.loop}</li>
            <li>{lake.activities.items.food}</li>
          </ul>
        </div>
        <Button type="button">
          <a href="https://lake-kruth-wildenstein.fr/" target="_blank">
            {lake.cta}
          </a>
        </Button>
      </div>
    </>
  );
};
export default LakeDeKruthWildenstein;
