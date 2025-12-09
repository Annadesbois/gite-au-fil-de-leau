import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { grangePhotos } from "@/data/grange-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("grange");

export { generateMetadata };

const GrangeRoomPage = async ({ params }: PageProp) => {
  const grange = await getPageMessages(params);

  return (
    <>
      <PhotoCarousel slides={grangePhotos} />
      <div className="content-area fabric-surface-light description-page-layout">
        <h1>{grange.title}</h1>
        <div className="flex flex-col gap-12">
          <p className="font-bold text-center">{grange.intro}</p>
          <div>
            <h2 className="font-bold">{grange.room.title}</h2>
            <ul>
              <li>{grange.room.items.mainBeds}</li>
              <li>{grange.room.items.bathroom}</li>
              <li>{grange.room.items.mezzanine}</li>
            </ul>
            <p className="font-bold text-center mt-8">{grange.room.note1}</p>
            <p className="font-bold text-center mt-8">{grange.room.note2}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default GrangeRoomPage;
