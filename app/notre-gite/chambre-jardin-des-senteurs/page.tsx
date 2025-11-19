import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { senteursPhotos } from "@/data/senteurs-photos";

const ChambreJardinDesSenteursPage = () => {
  return (
    <>
      <PhotoCarousel slides={senteursPhotos} />
      <div className="content-area relative fabric-surface-light p-6 md:pb-10 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1 className="mb-10 text-3xl font-bold text-center">{`La chambre "Jardin des Senteurs"`}</h1>
        <div className="flex flex-col gap-12">
          <p className="font-bold text-center">
            Ses fenêtres s’ouvrent sur le « jardin à déguster », ses aromates,
            fraises des bois et fleurs comestibles, situé le long de la rue, une
            rue de village qui se transforme plus loin en chemin vers les
            sommets vosgiens. Son ambiance fleurie et lumineuse invite à la
            sérénité.
          </p>
          <div>
            <h2 className="font-bold">Cette chambre comporte :</h2>
            <ul>
              <li>Chambre à 1 lit 140/190</li>
              <li>
                Salle d’eau privative attenante avec douche à l’italienne,
                vasque et WC
              </li>
              <li>Adaptée aux personnes en fauteuil roulant</li>
            </ul>
            <p className="font-bold text-center mt-8">
              Située au rez-de-chaussée et accessible de plain-pied, cette chambre est adaptée aux personnes à mobilité réduite.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChambreJardinDesSenteursPage;
