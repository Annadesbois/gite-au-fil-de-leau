import type { Metadata } from "next";

import PhotoCarousel from "@/components/carousel/PhotoCarousel";

import Button from "@/components/Button";
import { lacPhotos } from "@/data/lac-photos";

export const metadata: Metadata = {
  title: "",
  description: "",
};

const LacDeKruthWildenstein = () => {
  return (
    <>
      <PhotoCarousel slides={lacPhotos} />
      <div className="relative fabric-surface-light p-6 pb-12 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1>Le lac de Kruth-Wildenstein</h1>
        <div className="flex flex-col gap-12 mb-12 md:mb-14 text-center">
          <p className="font-bold">
            Le lac de Kruth-Wildenstein invite à la détente et au dépaysement.
            Cette retenue d’eau est la plus grande du versant alsacien du Massif
            des Vosges avec une superficie de 81 ha.
          </p>
          <p>
            Il s'agit d'un réservoir d'une capacité de 12 millions de mètres
            cubes, construit au fond de la vallée de la Thur, entre les villages
            de Kruth et de Wildenstein. Le bassin versant de la haute Thur se
            compose essentiellement de ballons fortement enneigés chaque hiver.
            Des crues printanières parfois catastrophiques ont suggéré, dès le
            XIXe siècle lors d'une rupture d'un barrage utilisé par une fabrique
            de verre en amont de Wildenstein, l'édification d'un barrage
            permettant leur régulation.
          </p>
          <p>
            Ce n'est cependant qu'en 1954 que sa construction fut décidée, sept
            ans après une dernière crue dévastatrice. Édifié de 1959 à 1963, le
            barrage fut mis en eau en 1964. En raison du faible débit de la Thur
            à cette endroit, il n'a pas été jugé rentable d'installer une
            centrale hydroélectrique. Des zones de promenade et de découverte y
            ont été aménagées pour les visiteurs qui souhaitent se détendre
            autour du plan d’eau.
          </p>
        </div>
        <div className="content-area mb-10">
          <h2 className="font-bold">
            De nombreuses activités sont proposées :
          </h2>
          <ul>
            <li>Pêche</li>
            <li>Canoë kayak, pédalo</li>
            <li>Camping à 2 km</li>
            <li>Parc accrobranche</li>
            <li>Location de vélo (électriques, VTT) </li>
            <li>Géocatching et visite des ruines du château de Wildenstein</li>
            <li>
              Possibilité d'en faire le tour par un sentier pédestre et vélo de
              (5km environ)
            </li>
            <li>Possibilité de se restaurer sur place</li>
          </ul>
        </div>
        <Button type="button">
          <a href="https://lac-kruth-wildenstein.fr/" target="_blank">
            Découvrir
          </a>
        </Button>
      </div>
    </>
  );
};
export default LacDeKruthWildenstein;
