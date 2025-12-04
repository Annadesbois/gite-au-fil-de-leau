import type { Metadata } from "next";

import PhotoCarousel from "@/components/carousel/PhotoCarousel";

import Button from "@/components/Button";
import { wesserlingPhotos } from "@/data/wesserling-photos";

export const metadata: Metadata = {
  title: "",
  description: "",
};

const ParcDeWesserlingPage = () => {
  return (
    <>
      <PhotoCarousel slides={wesserlingPhotos} />
      <div className="relative fabric-surface-light p-6 pb-12 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1>Le Parc de Wesserling</h1>
        <div className="flex flex-col gap-12 mb-12 md:mb-14 text-center">
          <p className="font-bold">
            Sur des terres de haute tradition textile, le Parc de Wesserling
            retrace l’extraordinaire aventure industrielle de cette ancienne «
            Manufacture Royale ».
          </p>
          <p>
            Il surprend par ses 5 somptueux jardins, classés « Jardin
            Remarquable », et par sa collection, unique en France, de bâtiments
            liés à l’industrie textile (usines, hangars, château des patrons,
            maisons de maître, friche industrielle, ferme…).
          </p>
          <p>
            Original, son Écomusée textile et sa Grande Chaufferie associent
            l’histoire du site à l’art contemporain par des expositions vivantes
            et participatives, d’étonnants sons et lumières…
          </p>
          <p>
            Des visites théâtralisées et des démonstrations de filage, tissage,
            impression à la planche font également revivre les métiers de
            l’industrie textile. Il s’anime tout au long de l’année par de
            nombreux événements jardins, textiles, culturels et artistiques.
          </p>
        </div>
        <div className="content-area mb-10">
          <h2 className="font-bold">Le Parc de Wesserling, c’est aussi :</h2>
          <ul>
            <li>Des boutiques</li>
            <li>Un Pavillon des Créateurs et ses artisans</li>
            <li>Un magasin de produits fermiers</li>
            <li>Des espaces d’entreprises </li>
            <li>Un théâtre de poche</li>
            <li>Des résidences d’artistes…</li>
          </ul>
        </div>
        <Button type="button">
          <a href="https://www.parc-wesserling.fr/" target="_blank">
            Découvrir
          </a>
        </Button>
      </div>
    </>
  );
};
export default ParcDeWesserlingPage;
