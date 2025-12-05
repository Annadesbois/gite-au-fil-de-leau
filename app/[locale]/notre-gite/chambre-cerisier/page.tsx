import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { cerisierPhotos } from "@/data/cerisier-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("cerisier");

export { generateMetadata };

const ChambreCerisierPage = async ({ params }: PageProp) => {
  const cerisier = await getPageMessages(params);

  return (
    <>
      <PhotoCarousel slides={cerisierPhotos} />
      <div className="content-area relative fabric-surface-light p-6 md:pb-10 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1>{cerisier.title}</h1>
        <div className="flex flex-col gap-12">
          <p className="font-bold text-center">{cerisier.intro}</p>
          <div>
            <h2 className="font-bold">{cerisier.room.title}</h2>
            <ul>
              <li>{cerisier.room.items.mainBeds}</li>
              <li>{cerisier.room.items.drawerBeds}</li>
              <li>{cerisier.room.items.bathroom}</li>
            </ul>
            <p className="font-bold text-center mt-8">{cerisier.room.note1}</p>
            <p className="font-bold text-center mt-8">{cerisier.room.note2}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChambreCerisierPage;
