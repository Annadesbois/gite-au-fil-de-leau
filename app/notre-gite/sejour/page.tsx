import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { sejourCarouselPhotos } from "../../../data/sejour-carousel";

const SejourPage = () => {
  return (
    <>
      <PhotoCarousel slides={sejourCarouselPhotos} />
      <div>
        <h1>Le séjour</h1>
        <div>
          <p>
            Le séjour Le séjour de 60m2 évoque les vérandas traditionnelles en
            bois, appelées loewa localement.
          </p>
          <h2>Il comporte :</h2>
          <ul>
            <li>un salon avec piano</li>
            <li>une salle-à-manger avec poêle à bois</li>
            <li>une véranda avec table haute dans une ambiance végétale</li>
            <li></li>
          </ul>
          <p>
            Il accède à la terrasse qui domine le pré-verger en bord du cours
            d’eau.
          </p>
          <h2>Le séjour s’ouvre sur une cuisine équipée avec :</h2>
          <ul>
            <li>plaques à induction</li>
            <li>four et four micro-ondes</li>
            <li>lave-vaisselle</li>
            <li>réfrigérateur et congélateur</li>
            <li>service à raclette et à fondue</li>
            <li>bouilloire</li>
            <li>cafetière</li>
            <li>mixer</li>
            <li></li>
          </ul>
          <p>
            Un petit salon indépendant, avec TV et lecteur DVD, a été aménagé
            dans l’ancienne grange, dont le cachet pittoresque a été conservé.
          </p>
          <p>
            Cette grande pièce à vivre offre de multiples possibilités pour
            partager des moments conviviaux.
          </p>
        </div>
      </div>
    </>
  );
};
export default SejourPage;
