import type { Metadata } from "next";

import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { bienEtrePhotos } from "@/data/bien-etre-photos";

export const metadata: Metadata = {
  title: "Espace bien-être avec spa & sauna — Gîte Au fil de l'eau",
  description:
    "Espace bien-être du gîte Au fil de l'eau à Storckensohn, avec spa, sauna, douches et chaises de repos s’ouvrant sur le pré-verger, pour un séjour détente en Hautes Vosges d’Alsace.",
};

const EspaceBienEtrePage = () => {
  return (
    <>
      <PhotoCarousel slides={bienEtrePhotos} />
      <div className="content-area relative fabric-surface-light p-6 md:pb-10 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1>L'espace bien-être</h1>
        <div className="flex flex-col gap-12">
          <p className="font-bold text-center">
            Un espace bien-être, avec spa, sauna et chaises de repos est à la
            disposition des hôtes. Il s’ouvre de plain-pied sur le pré-verger.
          </p>
          <p className="font-bold text-center">
            Ainsi, chacun peut composer son parcours de remise en forme selon
            ses envies, passant de la douche chaude ou froide, au sauna, au bain
            à bulles et ses massages adaptés, aux chaises longues intérieures ou
            extérieures.
          </p>
        </div>
      </div>
    </>
  );
};
export default EspaceBienEtrePage;
