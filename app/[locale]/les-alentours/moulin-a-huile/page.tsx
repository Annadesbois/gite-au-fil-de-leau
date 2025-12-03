import type { Metadata } from "next";

import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import Button from "@/components/Button";
import { moulinPhotos } from "@/data/moulin-photos";

export const metadata: Metadata = {
  title: "Moulin à Huile de Storckensohn | Gîte Au fil de l'eau",
  description:
    "Découvrez le Moulin à Huile de Storckensohn, un site historique restauré où vous pourrez admirer les anciennes techniques de production d'huile et de cidre, tout en profitant d'une atmosphère authentique au cœur des Hautes-Vosges d'Alsace.",
};

const MoulinAHuilePage = () => {
  return (
    <>
      <PhotoCarousel slides={moulinPhotos} />
      <div className="relative fabric-surface-light p-6 pb-12 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1>Le Moulin à Huile de Storckensohn</h1>
        <div className="flex flex-col gap-12 mb-12 md:mb-14 text-center">
          <p className="font-bold">
            Le Moulin construit en 1732 a tourné jusqu'en 1962. Les pommes et
            les poires servaient à fabriquer le cidre paysan. Noix, colza et
            tournesols étaient amenés en grand nombre afin d'en tirer une huile
            fine et savoureuse. Puis, la roue inactive, fatiguée, s'est laissée
            mourir.
          </p>
          <p>
            La restauration du Moulin est entreprise dès 1991 par un groupe de
            bénévoles. L'eau du Dorfbach descendant fièrement du Gazon Vert peut
            à nouveau alimentaer la roue à augets patiemment reconstruite
            identique à l'ancienne. La presse à cidre , taillée d'une seule
            pièce dans un fût de chêne, il y a deux siècles déjà, laisse de
            nouveau couler un jus de qualité, des plus appréciés, que l'on nomme
            le moût de pommes.
          </p>
          <p>
            Que d'émotions lorsque tout s'active. La meule peut à nouveau
            tourner son énorme masse et écraser les pommes, noix et noisettes.
            Les vieux engrenages et axes en bois transmettent joyeusement de
            tout côté, l'énergie nécessaire. Les noix et noisettes se laissent
            attendrir dans le four restauré, puis prennent le chemin de
            l'imposante presse à huile qui peut à nouveau développer ses
            pressions énormes. L'ancestrale machinerie, mystérieuse, envoûtante,
            qui semble venir du fond des temps, permettant d'écraser le colza et
            le tournesol, reprend encore parfois du service la saison venue.
          </p>
        </div>
        <Button type="button">
          <a href="https://www.moulinstorckensohn.com/" target="_blank">
            Découvrir
          </a>
        </Button>
      </div>
    </>
  );
};
export default MoulinAHuilePage;
