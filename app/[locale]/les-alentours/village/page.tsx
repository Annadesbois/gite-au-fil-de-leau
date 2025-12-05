import type { Metadata } from "next";
import Image from "next/image";

import { villagePhotos } from "@/data/village-photos";
import { getMessages } from "@/lib/i18n";

import type { PageProp, VillageMessages } from "@/types/i18n";

export const generateMetadata = async ({
  params,
}: PageProp): Promise<Metadata> => {
  const { locale } = await params;
  const messages = getMessages(locale);
  const village = messages.village as VillageMessages;

  return {
    title: village.meta.title,
    description: village.meta.description,
  };
};

const VillagePage = async ({ params }: PageProp) => {
  const { locale } = await params;
  const messages = getMessages(locale);
  const village = messages.village as VillageMessages;

  return (
    <div className="page-layout">
      <h1 className="fabric-surface-light title-block">{village.title}</h1>
      <div className="relative fabric-surface-light p-6 rounded-xl flex flex-col gap-6 items-center text-center">
        <p className="font-bold">{village.intro}</p>
        <div className="flex flex-col gap-12 mt-4">
          {villagePhotos.map((photo, index) => (
            <figure key={index} className="flex flex-col gap-3">
              <Image
                src={photo.src}
                alt={photo.alt[locale] ?? photo.alt.fr}
                width={1400}
                height={900}
                className="w-screen max-w-[90vw] md:max-w-[75vw] h-auto rounded-2xl shadow-md"
              />
              <figcaption>{photo.alt[locale] ?? photo.alt.fr}</figcaption>
            </figure>
          ))}
        </div>
        <p className="text-xs text-white/80 bg-black/30 px-2 py-0.5 rounded-md backdrop-blur-sm">
          Imagery ©2025 Google — Map data ©2025 Google
        </p>
      </div>
    </div>
  );
};
export default VillagePage;
