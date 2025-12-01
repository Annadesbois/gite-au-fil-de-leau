import type { Metadata } from "next";

import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { sejourPhotos } from "@/data/sejour-photos";
import { getMessages, type Locale } from "@/lib/i18n";
import type { SejourMessages } from "@/types/i18n";

type SejourPageProps = {
  params: Promise<{ locale: Locale }>;
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const messages = getMessages(locale);
  const sejour = messages.sejour as SejourMessages;

  return {
    title: sejour.meta.title,
    description: sejour.meta.description,
  };
};

const SejourPage = async ({ params }: SejourPageProps) => {
  const { locale } = await params;
  const messages = getMessages(locale);
  const sejour = messages.sejour as SejourMessages;

  return (
    <>
      <PhotoCarousel slides={sejourPhotos} />
      <div className="content-area relative fabric-surface-light p-6 md:pb-10 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
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
