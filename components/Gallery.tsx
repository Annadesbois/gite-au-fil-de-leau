import Image from "next/image";

import type { Locale } from "@/lib/i18n.config";

import type { ActivitiesPhoto } from "@/types/i18n";

type GalleryProps = {
  photos: ActivitiesPhoto[];
  locale: Locale;
};

const Gallery = ({ photos, locale }: GalleryProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <figure
          key={photo.src + index}
          tabIndex={0}
          className={`relative w-full aspect-4/3 overflow-hidden rounded-2xl group fabric-surface-light ${
            photo.size === "large" ? "md:col-span-2 lg:row-span-2" : ""
          }`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={1200}
            height={900}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-focus-within:scale-105"
          />
          <figcaption className="absolute inset-0 flex items-center justify-center p-4 text-center text-sm font-semibold text-white bg-black/70 backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
            <span className="drop-shadow-md">
              {photo.legend[locale] ?? photo.legend.fr}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Gallery;
