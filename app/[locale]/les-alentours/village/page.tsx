import Image from "next/image";
import { villagePhotos } from "@/data/village-photos";

const VillagePage = () => {
  return (
    <div className="page-layout">
      <h1 className="fabric-surface-light title-block">Le village de Storckensohn en 3D</h1>
      <div className="relative fabric-surface-light p-6 rounded-xl flex flex-col gap-6 items-center text-center">
        <p className="font-bold">
          Le gîte Au fil de l'eau est situé en plein coeur des Hautes-Vosges
          d'Alsace, dans le village de Storckensohn.
        </p>
        <div className="flex flex-col gap-12 mt-4">
          {villagePhotos.map((photo, index) => (
            <figure key={index} className="flex flex-col gap-3">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1400}
                height={900}
                className="w-screen max-w-[90vw] md:max-w-[75vw] h-auto rounded-2xl shadow-md"
              />
              <figcaption>{photo.alt}</figcaption>
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
