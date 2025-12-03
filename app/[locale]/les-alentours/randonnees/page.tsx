import type { Metadata } from "next";

import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { randonneesPhotos } from "@/data/randonnees-photos";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Randonnées autour de Storckensohn | Gîte Au fil de l'eau",
  description:
    "Découvrez les plus belles randonnées autour de Storckensohn, au cœur des Hautes-Vosges d’Alsace : sentiers, panoramas et itinéraires accessibles directement depuis le village.",
};

const RandonneesPage = () => {
  return (
    <>
      <PhotoCarousel slides={randonneesPhotos} />
      <div className="relative fabric-surface-light p-6 pb-12 rounded-tl-4xl rounded-br-4xl rounded-tr-sm rounded-bl-sm">
        <h1>Les randonnées</h1>
        <div className="flex flex-col gap-12 mb-12 md:mb-14 text-center">
          <p className="font-bold">
            Le village de Storckensohn est situé au cœur du massif vosgien. Un
            vaste réseau de randonnées est accessible directement à partir du
            village.
          </p>
          <p>
            Vos hôtes sauront vous conseiller sur les itinéraires à suivre et
            sur les choses à découvrir.
          </p>
          <p>
            Un réseau de gîtes d'étapes entièrement remis à neuf en 2013 vous
            accueillera pour vos repas et soirées montagnardes.
          </p>
        </div>
        <Button type="button">
          <a
            href="https://www.outdooractive.com/fr/routes/#area=1613358&bm=osm%3Asummer&caml=9y3,15ffyt,7x0xec,0,0&cat=Randonn%C3%A9e&filter=r-fullyTranslatedLangus-fr,r-openState-,sb-sortedBy-0&q=Storckensohn%20(Haut-Rhin,%20Grand%20Est,%20France)&view=map&wt=Storckensohn%20(Haut-Rhin,%20Grand%20Est,%20France)%0A1613358&zc=13.89091,6.95848,47.87338"
            target="_blank"
          >
            Découvrir
          </a>
        </Button>
      </div>
    </>
  );
};
export default RandonneesPage;
