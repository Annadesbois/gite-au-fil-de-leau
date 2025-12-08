import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { sejourPhotos } from "@/data/sejour-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("sejour");

export { generateMetadata };

const SejourPage = async ({ params }: PageProp) => {
  const sejour = await getPageMessages(params);

  return (
    <>
      <PhotoCarousel slides={sejourPhotos} />
      <div className="content-area fabric-surface-light description-page-layout">
        <h1>{sejour.hero.title}</h1>
        <div className="flex flex-col gap-12">
          <p className="font-bold text-center">{sejour.hero.highlight}</p>
          <div>
            <h2 className="font-bold">{sejour.livingArea.title}</h2>
            <ul>
              <li>{sejour.livingArea.items.salonPiano}</li>
              <li>{sejour.livingArea.items.diningWoodStove}</li>
              <li>{sejour.livingArea.items.veranda}</li>
            </ul>
            <p className="font-bold text-center mt-8">
              {sejour.livingArea.note}
            </p>
          </div>
          <div>
            <h2 className="font-bold">{sejour.kitchen.title}</h2>
            <ul>
              <li>{sejour.kitchen.items.induction}</li>
              <li>{sejour.kitchen.items.oven}</li>
              <li>{sejour.kitchen.items.dishwasher}</li>
              <li>{sejour.kitchen.items.fridgeFreezer}</li>
              <li>{sejour.kitchen.items.racletteFondue}</li>
              <li>{sejour.kitchen.items.kettle}</li>
              <li>{sejour.kitchen.items.coffeeMaker}</li>
              <li>{sejour.kitchen.items.blender}</li>
            </ul>
          </div>
          <p className="font-bold text-center">{sejour.closing.main}</p>
          <p className="text-center">
            <span className="font-bold">
              {sejour.closing.smallLounge.title}
            </span>
            , {sejour.closing.smallLounge.text}
          </p>
        </div>
      </div>
    </>
  );
};
export default SejourPage;
