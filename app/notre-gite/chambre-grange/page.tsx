import type { Metadata } from "next";

import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { grangePhotos } from "@/data/grange-photos";

export const metadata: Metadata = {
  title: "Chambre « Grange » — Gîte Au fil de l'eau à Storckensohn",
  description:
    "La chambre « Grange » du gîte Au fil de l'eau conserve le charme de l’ancienne grange, avec lits modulables, salle d’eau privative et petit salon en mezzanine pour un séjour chaleureux.",
};

const ChambreGrangePage = () => {
  return (
    <>
      <PhotoCarousel slides={grangePhotos} />
      <div className="content-area relative fabric-surface-light p-6 md:pb-10 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1>La chambre "Grange"</h1>
        <div className="flex flex-col gap-12">
          <p className="font-bold text-center">
            De l’ancienne grange où étaient stockés le foin et divers matériels,
            cette chambre a conservé l’ambiance bois, la gerbière qui ouvre la
            vue sur le verger, les anciennes luges et les bonbonnes à «
            schnaps». C’est le lieu où étaient rangés les objets inutilisés,
            chargés de souvenirs.
          </p>
          <div>
            <h2 className="font-bold">Cette chambre comporte :</h2>
            <ul>
              <li>Chambre à 2 lits 90/200 transformables en 1 lit 180/200</li>
              <li>Salle d’eau privative attenante avec douche, vasque et WC</li>
              <li>Petit salon attenant en mezzanine</li>
            </ul>
            <p className="font-bold text-center mt-8">
              Un lieu pour méditer tranquillement, parmi les objets d’ici et
              d’ailleurs. La grange au retour de voyage …
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChambreGrangePage;
