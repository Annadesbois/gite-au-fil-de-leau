import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { sousBoisPhotos } from "@/data/sous-bois-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("sousBois");

export { generateMetadata };

const JardinDesSenteursRoomPage = async ({ params }: PageProp) => {
  const sousBois = await getPageMessages(params);

  return (
    <>
      <PhotoCarousel slides={sousBoisPhotos} />
      <div className="content-area fabric-surface-light description-page-layout">
        <h1>
          {sousBois.title1}
          <br className="block md:hidden" /> {sousBois.title2}
        </h1>
        <div className="flex flex-col gap-12">
          <p className="font-bold text-center">{sousBois.intro}</p>
          <div>
            <h2 className="font-bold">{sousBois.room.title}</h2>
            <ul>
              <li>{sousBois.room.items.mainBed}</li>
              <li>{sousBois.room.items.bathroom}</li>
            </ul>
            <p className="font-bold text-center mt-8">{sousBois.note}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default JardinDesSenteursRoomPage;
