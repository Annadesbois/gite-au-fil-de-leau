import type { Metadata } from "next";

import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { auroresPhotos } from "@/data/aurore-photos";

export const metadata: Metadata = {
  title: "Chambre « Aurores » — Gîte Au fil de l'eau à Storckensohn",
  description:
    "La chambre « Aurores » du gîte Au fil de l'eau, orientée au levant, avec 2 lits 90/200 modulables en lit 180/200 et salle d’eau privative aux couleurs pétillantes.",
};

const ChambreAuroresPage = () => {
  return (
    <>
      <PhotoCarousel slides={auroresPhotos} />
      <div className="content-area relative fabric-surface-light p-6 md:pb-10 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1>{`La chambre "Aurores"`}</h1>
        <div className="flex flex-col gap-12">
          <p className="font-bold text-center">
            Orientée au levant, le soleil égaye cette chambre dès l’aube,
            ravivant un camaïeu de coloris chatoyants : vert tilleul, mandarine,
            jaune paille, châtaigner ...
          </p>
          <p className="font-bold text-center">
            La salle d’eau attenante offre la même pétillance, avec son dallage
            multicolore de poissons, étoiles de mer, crabes, tortues…
          </p>
          <div>
            <h2 className="font-bold">Cette chambre comporte :</h2>
            <ul>
              <li>Chambre à 2 lits 90/200 transformables en 1 lit 180/200</li>
              <li>Salle d’eau privative attenante avec douche, vasque et WC</li>
            </ul>
            <p className="font-bold text-center mt-8">
              Entre alcove, jardin et bord de mer, cette chambre confère humour
              et tonus dès le réveil !
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChambreAuroresPage;
