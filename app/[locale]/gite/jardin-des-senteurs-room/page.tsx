import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { senteursPhotos } from "@/data/senteurs-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("senteurs");

export { generateMetadata };

const JardinDesSenteursRoomPage = async ({ params }: PageProp) => {
  const senteurs = await getPageMessages(params);

  return (
    <>
      <PhotoCarousel slides={senteursPhotos} />
      <div className="content-area fabric-surface-light description-page-layout">
        <h1>
          {senteurs.title1}
          <br className="block md:hidden" /> {senteurs.title2}
        </h1>
        <div className="flex flex-col gap-12">
          <p className="font-bold text-center">{senteurs.intro}</p>
          <div>
            <h2 className="font-bold">{senteurs.room.title}</h2>
            <ul>
              <li>{senteurs.room.items.mainBed}</li>
              <li>{senteurs.room.items.bathroom}</li>
            </ul>
            <p className="font-bold text-center mt-8">{senteurs.note}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default JardinDesSenteursRoomPage;
