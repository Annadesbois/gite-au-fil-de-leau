import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { wellnessPhotos } from "@/data/wellness-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers(
  "wellness",
  "wellness",
  {
    url: "/photos-gite/bien-etre/espace-bien-etre-spa.jpg",
    width: 1200,
    height: 800,
    alt: "Espace bien-être avec spa et sauna du Gîte Au fil de l'eau à Storckensohn (Alsace)",
  },
);

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
