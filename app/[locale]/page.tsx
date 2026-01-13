import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { homePhotos } from "@/data/home-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("home");

export { generateMetadata };

const HomePage = async ({ params }: PageProp) => {
  const home = await getPageMessages(params);

  return (
    <>
      <PhotoCarousel slides={homePhotos} />
      <div className="content-area relative fabric-surface-light flex flex-col gap-6 p-6 md:pb-10 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <div className="flex flex-col gap-6 text-center font-bold">
          <h1 className="text-2xl md:mb-4">
            {home.hero.title}
            <br className="block md:hidden" /> Au fil de l'eau
          </h1>
          <p>{home.hero.intro1}</p>
          <p>{home.hero.intro2}</p>
        </div>
        <div className="mt-6">
          <h2 className="font-bold">{home.groundFloor.title}</h2>
          <ul>
            <li>{home.groundFloor.items.kitchen}</li>
            <li>{home.groundFloor.items.dining}</li>
            <li>{home.groundFloor.items.tvRoom}</li>
            <li>{home.groundFloor.items.bedroom}</li>
            <li>{home.groundFloor.items.wc}</li>
            <li>{home.groundFloor.items.terrace}</li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="font-bold">{home.firstFloor.title}</h2>
          <ul>
            <li>{home.firstFloor.items.bedrooms}</li>
            <li>{home.firstFloor.items.mezzanine}</li>
          </ul>
        </div>
        <p className="mt-6">
          <span className="font-bold">{home.wellness.title}</span>
          {home.wellness.text}
        </p>
        <div className="mt-6">
          <h2 className="font-bold">{home.baby.title}</h2>
          <ul>
            <li>{home.baby.items.chairs}</li>
            <li>{home.baby.items.bed}</li>
            <li>{home.baby.items.bath}</li>
            <li>{home.baby.items.kitchen}</li>
          </ul>
        </div>
        <p className="font-bold text-center mt-6">{home.accessibility.text}</p>
      </div>
    </>
  );
};

export default HomePage;
