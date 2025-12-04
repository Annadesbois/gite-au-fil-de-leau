export type ActivityPhoto = {
  src: string;
  alt: string;
  legend: string;
  size?: "tall" | "wide" | "square";
};

export const activitiesPhotos: ActivityPhoto[] = [
  {
    src: "/photos-alentours/le-reste/ski.jpg",
    alt: "Personnes faisant du ski",
    legend:
      "6 stations de ski de piste et de fond dans un rayon de 25km :  Markstein,  La Bresse,  Ventron Frère Joseph, Grand Ballon, Rouge Gazon à St-Maurice,  Larcenaire à Bussang",
    size: "wide",
  },
  {
    src: "/photos-alentours/le-reste/parapente.jpg",
    alt: "Personne en parapente",
    legend: "Le parapente au Markstein et au Drumont",
    size: "tall",
  },
  {
    src: "/photos-alentours/le-reste/velo.jpg",
    alt: "Personne faisant du vélo",
    legend:
      "La piste cyclable qui traverse le village et rejoint le réseau de la vallée",
    size: "square",
  },
  {
    src: "/photos-alentours/le-reste/ane.jpg",
    alt: "âne",
    legend:
      "Chauvl’âne , randonnée avec portage des bagages à dos d’ânes pour toute la famille",
    size: "wide",
  },
  {
    src: "/photos-alentours/le-reste/bob-luge-markstein.png",
    alt: "Piste de luge sur rail d'été au Markstein",
    legend: "Le bob-luge du Markstein à 25km",
    size: "tall",
  },
  {
    src: "/photos-alentours/le-reste/cheval.jpg",
    alt: "Cheval dans un pré",
    legend:
      "Le centre équestre de la Jumenterie à Saint-Maurice-sur-Moselle : 15 km",
    size: "square",
  },
  {
    src: "/photos-alentours/le-reste/piscine.jpg",
    alt: "Piscine extérieure",
    legend: "La piscine de Fellering à 5 km",
    size: "wide",
  },
  {
    src: "/photos-alentours/le-reste/casino-bussang.jpg",
    alt: "Casino de Bussang",
    legend: "Le casino de Bussang à 5 km",
    size: "tall",
  },
  {
    src: "/photos-alentours/le-reste/musee-serret.png",
    alt: "Musée Serret à Saint-Amarin",
    legend: "Le musée Serret de Saint-Amarin à 7 km",
    size: "square",
  },
  {
    src: "/photos-alentours/le-reste/magasins.png",
    alt: "Magasins à Wesserling",
    legend: "Supermarché avec blanchisserie : Parc de Wesserling à 5 km",
    size: "wide",
  },
  {
    src: "/photos-alentours/le-reste/magasin-de-producteurs.webp",
    alt: "Magasin de producteurs locaux",
    legend: "Magasin de producteurs bio et locaux à Wesserling à 5 km",
    size: "tall",
  },
  {
    src: "/photos-alentours/le-reste/pavillon-createurs.png",
    alt: "Pavillon des créateurs à Wesserling",
    legend: "Le pavillon des créateurs au Parc de Wesserling à 5 km",
    size: "square",
  },
  {
    src: "/photos-alentours/le-reste/tarte-flambee.jpg",
    alt: "Tarte flambée",
    legend: "De nombreux restaurants dans les environs",
    size: "wide",
  },
];
