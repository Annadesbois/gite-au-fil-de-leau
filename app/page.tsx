import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { homeCarouselPhotos } from "@/data/home-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

export default function Home() {
  return (
    <main>
      <PhotoCarousel slides={homeCarouselPhotos} options={OPTIONS} />
      <div>
        <p>
          Le Gîte au Fil de l'eau offre un cadre agréable pour se ressourcer au cœur des Hautes Vosges d’Alsace, dans le petit village de Storckensohn.
        </p>
        <p>
          Installé dans une ancienne ferme réhabilitée en une confortable maison de campagne, le gîte peut accueillir jusqu’à 10 personnes.
        </p>
        <p>
          Le rez-de-chaussée comporte une cuisine équipée qui s’ouvre sur le salon, la salle à manger et la véranda avec piano et poêle à bois, un deuxième salon avec TV et lecteur DVD aménagé dans l’ancienne grange, une chambre à coucher avec lit 140/190 et une salle d’eau privative attenante (avec douche à l’italienne, vasque, WC), un WC indépendant et une terrasse.
        </p>
        <p>
          Un espace bien-être, avec spa, sauna, salle d’eau et chaises longues est accessible par élévateur au niveau -1. Ses larges baies vitrées s’ouvrent sur le pré-verger en bord du ruisseau.
        </p>
        <p>
          Le premier étage comporte 3 chambres à coucher avec chacune sa salle d’eau privative attenante (douche ou baignoire, vasque, WC) et des lits de 90/200 transformables en lits de 180/200, ainsi qu’un petit salon en mezzanine dans l’ancienne grange.
        </p>
        <p>
          Le rez-de-chaussée et l’espace bien-être du niveau -1 sont accessibles aux personnes à mobilité réduite.
        </p>
      </div>
    </main>
  );
}
