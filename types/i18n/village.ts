export type VillageMessages = {
  meta: {
    title: string;
    description: string;
  };
  title: string;
  intro: string;
  copyright: string;
};

export type VillagePhoto = {
  src: string;
  alt: {
    fr: string;
    en: string;
    de: string;
  };
};