import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { auroresPhotos } from "@/data/aurore-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("aurores");

export { generateMetadata };

const AuroresRoomPage = async ({ params }: PageProp) => {
  const aurores = await getPageMessages(params);

  return (
    <>
      <PhotoCarousel slides={auroresPhotos} />
      <div className="content-area fabric-surface-light description-page-layout">
        <h1>{aurores.title}</h1>
        <div className="flex flex-col gap-12">
          <p className="font-bold text-center">{aurores.intro1}</p>
          <p className="font-bold text-center">{aurores.intro2}</p>
          <div>
            <h2 className="font-bold">{aurores.room.title}</h2>
            <ul>
              <li>{aurores.room.items.mainBeds}</li>
              <li>{aurores.room.items.bathroom}</li>
            </ul>
            <p className="font-bold text-center mt-8">{aurores.room.note}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuroresRoomPage;
