import type { Metadata } from "next";

import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { homePhotos } from "@/data/home-photos";

export const metadata: Metadata = {
  title: "Gîte Au fil de l'eau — Location de vacances à Storckensohn",
  description:
    "Gîte Au fil de l'eau à Storckensohn, ancienne ferme réhabilitée pouvant accueillir jusqu’à 10 personnes, avec espace bien-être et terrasse en plein coeur des Hautes Vosges d’Alsace.",
};

const Home = () => {
  return (
    <>
      <PhotoCarousel slides={homePhotos} />
      <div className="content-area relative fabric-surface-light flex flex-col gap-6 p-6 md:pb-10 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <div className="flex flex-col gap-6 text-center font-bold">
          <h1 className="text-2xl md:mb-4">
            Bienvenue au gîte Au fil de l'eau
          </h1>
          <p>
            Le Gîte Au fil de l'eau offre un cadre agréable pour se ressourcer
            au cœur des Hautes Vosges d’Alsace, dans le petit village de
            Storckensohn.
          </p>
          <p>
            Installé dans une ancienne ferme réhabilitée en une confortable
            maison de campagne, le gîte peut accueillir jusqu’à 10 personnes.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="font-bold">Le rez-de-chaussée comporte :</h2>
          <ul>
            <li>Une cuisine équipée qui s’ouvre sur le salon</li>
            <li>La salle à manger et la véranda avec piano et poêle à bois</li>
            <li>
              Un deuxième salon avec TV et lecteur DVD aménagé dans l’ancienne
              grange
            </li>
            <li>
              Une chambre à coucher avec lit 140/190 et une salle d’eau
              privative attenante (avec douche à l’italienne, vasque, WC)
            </li>
            <li>Un WC indépendant</li>
            <li>Et une terrasse</li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="font-bold">Le premier étage comporte :</h2>
          <ul>
            <li>
              3 chambres à coucher avec chacune sa salle d’eau privative
              attenante (douche ou baignoire, vasque, WC) et des lits de 90/200
              transformables en lits de 180/200
            </li>
            <li>un petit salon en mezzanine dans l’ancienne grange</li>
          </ul>
        </div>
        <p className="mt-6">
          <span className="font-bold">Un espace bien-être</span>, avec spa,
          sauna, salle d’eau et chaises longues est accessible par élévateur au
          niveau -1. Ses larges baies vitrées s’ouvrent sur le pré-verger en
          bord du ruisseau.
        </p>
        <p className="font-bold text-center mt-6">
          Le rez-de-chaussée et l’espace bien-être du niveau -1 sont accessibles
          aux personnes à mobilité réduite.
        </p>
      </div>
    </>
  );
};

export default Home;
