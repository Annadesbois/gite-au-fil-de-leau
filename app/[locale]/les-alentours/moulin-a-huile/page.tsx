import type { Metadata } from "next";

import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import Button from "@/components/Button";
import { moulinPhotos } from "@/data/moulin-photos";
import { getMessages } from "@/lib/i18n";

import type { PageProp, MoulinMessages } from "@/types/i18n";

export const generateMetadata = async ({
  params,
}: PageProp): Promise<Metadata> => {
  const { locale } = await params;
  const messages = getMessages(locale);
  const moulin = messages.moulin as MoulinMessages;

  return {
    title: moulin.meta.title,
    description: moulin.meta.description,
  };
};

const MoulinAHuilePage = async ({ params }: PageProp) => {
  const { locale } = await params;
  const messages = getMessages(locale);
  const moulin = messages.moulin as MoulinMessages;

  return (
    <>
      <PhotoCarousel slides={moulinPhotos} />
      <div className="relative fabric-surface-light p-6 pb-12 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1>{moulin.title}</h1>
        <div className="flex flex-col gap-12 mb-12 md:mb-14 text-center">
          <p className="font-bold">{moulin.p1}</p>
          <p>{moulin.p2}</p>
          <p>{moulin.p3}</p>
        </div>
        <Button type="button">
          <a href="https://www.moulinstorckensohn.com/" target="_blank">
            {moulin.cta}
          </a>
        </Button>
      </div>
    </>
  );
};
export default MoulinAHuilePage;
