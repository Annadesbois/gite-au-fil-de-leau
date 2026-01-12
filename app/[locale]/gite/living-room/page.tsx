import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { livingRoomPhotos } from "@/data/living-room-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("livingRoom");

export { generateMetadata };

const LivingRoomPage = async ({ params }: PageProp) => {
  const livingRoom = await getPageMessages(params);

  return (
    <>
      <PhotoCarousel slides={livingRoomPhotos} />
      <div className="content-area fabric-surface-light description-page-layout">
        <h1>{livingRoom.hero.title}</h1>
        <div className="flex flex-col gap-12">
          <p className="font-bold text-center">{livingRoom.hero.highlight}</p>
          <div>
            <h2 className="font-bold">{livingRoom.livingArea.title}</h2>
            <ul>
              <li>{livingRoom.livingArea.items.kitchen}</li>
              <li>{livingRoom.livingArea.items.diningWoodStove}</li>
              <li>{livingRoom.livingArea.items.veranda}</li>
            </ul>
            <p className="font-bold text-center mt-8">
              {livingRoom.livingArea.note}
            </p>
          </div>
          <div>
            <h2 className="font-bold">{livingRoom.kitchen.title}</h2>
            <ul>
              <li>{livingRoom.kitchen.items.induction}</li>
              <li>{livingRoom.kitchen.items.oven}</li>
              <li>{livingRoom.kitchen.items.dishwasher}</li>
              <li>{livingRoom.kitchen.items.fridgeFreezer}</li>
              <li>{livingRoom.kitchen.items.racletteFondue}</li>
              <li>{livingRoom.kitchen.items.kettle}</li>
              <li>{livingRoom.kitchen.items.coffeeMaker}</li>
              <li>{livingRoom.kitchen.items.saucepan}</li>
            </ul>
          </div>
          <p className="font-bold text-center">{livingRoom.closing.main}</p>
          <p className="text-center">
            <span className="font-bold">
              {livingRoom.closing.smallLounge.title}
            </span>
            {livingRoom.closing.smallLounge.text}
          </p>
        </div>
      </div>
    </>
  );
};
export default LivingRoomPage;
