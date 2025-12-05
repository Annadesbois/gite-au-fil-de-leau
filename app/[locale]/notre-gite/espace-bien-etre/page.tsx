import type { Metadata } from "next";

import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { bienEtrePhotos } from "@/data/bien-etre-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("wellness");

export { generateMetadata };

const EspaceBienEtrePage = async ({ params }: PageProp) => {
  const wellness = await getPageMessages(params);

  return (
    <>
      <PhotoCarousel slides={bienEtrePhotos} />
      <div className="content-area relative fabric-surface-light p-6 md:pb-10 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1>{wellness.title}</h1>
        <div className="flex flex-col gap-12">
          <p className="font-bold text-center">{wellness.intro1}</p>
          <p className="font-bold text-center">{wellness.intro2}</p>
        </div>
      </div>
    </>
  );
};
export default EspaceBienEtrePage;
