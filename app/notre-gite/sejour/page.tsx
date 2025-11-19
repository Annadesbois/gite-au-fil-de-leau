import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { sejourPhotos } from "../../../data/sejour-carousel";

const SejourPage = () => {
  return (
    <>
      <PhotoCarousel slides={sejourPhotos} />
      <div className="content-area relative fabric-surface-light p-6 md:pb-10 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1 className="mb-10 text-3xl font-bold text-center">Le séjour</h1>
        <div className="flex flex-col gap-12">
          <p className="font-bold text-center">
            Le séjour Le séjour de 60m2 évoque les vérandas traditionnelles en
            bois, appelées loewa localement.
          </p>
          <div>
            <h2 className="font-bold">Le séjour comporte :</h2>
            <ul>
              <li>un salon avec piano</li>
              <li>une salle-à-manger avec poêle à bois</li>
              <li>une véranda avec table haute dans une ambiance végétale</li>
            </ul>
            <p className="font-bold text-center mt-8">
              Il accède à la terrasse qui domine le pré-verger en bord du cours
              d’eau.
            </p>
          </div>
          <div>
            <h2 className="font-bold">
              Le séjour s’ouvre sur une cuisine équipée avec :
            </h2>
            <ul>
              <li>plaques à induction</li>
              <li>four et four micro-ondes</li>
              <li>lave-vaisselle</li>
              <li>réfrigérateur et congélateur</li>
              <li>service à raclette et à fondue</li>
              <li>bouilloire</li>
              <li>cafetière</li>
              <li>mixer</li>
            </ul>
          </div>
          <p className="font-bold text-center">
            Cette grande pièce à vivre offre de multiples possibilités pour
            partager des moments conviviaux.
          </p>
          <p className="text-center">
            <span className="font-bold">Un petit salon indépendant</span>, avec
            TV et lecteur DVD, a été aménagé dans l’ancienne grange, dont le
            cachet pittoresque a été conservé.
          </p>
        </div>
      </div>
    </>
  );
};
export default SejourPage;
