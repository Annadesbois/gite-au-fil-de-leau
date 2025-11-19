import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { cerisierPhotos } from "@/data/cerisier-carousel";

const ChambreCerisierPage = () => {
  return (
    <>
      <PhotoCarousel slides={cerisierPhotos} />
      <div className="content-area relative fabric-surface-light p-6 md:pb-10 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1 className="mb-10 text-3xl font-bold text-center">{`La chambre "Cerisier"`}</h1>
        <div className="flex flex-col gap-12">
          <p className="font-bold text-center">
            Fleurs de cerisiers, couleurs framboise et prune, … Cette chambre
            fait écho au verger que l’on peut contempler par une large baie
            vitrée, confortablement installé dans une rocking chair.
          </p>
          <div>
            <h2 className="font-bold">Cette chambre comporte :</h2>
            <ul>
              <li>Chambre à 2 lits 90/200 transformables en 1 lit 180/200</li>
              <li>2 lits tiroirs 90/200</li>
              <li>
                Salle d’eau privative attenante avec baignoire chromato, double
                vasque, WC et table à langer
              </li>
            </ul>
            <p className="font-bold text-center mt-8">
              Idéale pour un séjour romantique à deux, sa vaste surface permet également une utilisation parents-bébé ou groupe de 4 personnes.

            </p>
            <p className="font-bold text-center mt-8">
              La salle de bain blanche et lumineuse comporte un mobilier où
              transparaît l’arbre fruitier, et une baignoire chromato pour se
              détendre dans un bain de couleurs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChambreCerisierPage;
