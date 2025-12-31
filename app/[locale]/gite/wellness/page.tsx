import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { wellnessPhotos } from "@/data/wellness-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("wellness");

export { generateMetadata };

const WellnessPage = async ({ params }: PageProp) => {
  const wellness = await getPageMessages(params);

  return (
    <>
      <PhotoCarousel slides={wellnessPhotos} />
      <div className="content-area fabric-surface-light description-page-layout">
        <h1>{wellness.title}</h1>
        <div className="flex flex-col gap-12">
          <p className="font-bold text-center">{wellness.intro1}</p>
          <p className="font-bold text-center">{wellness.intro2}</p>
        </div>
      </div>
    </>
  );
};
export default WellnessPage;
