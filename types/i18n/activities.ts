export type LocalisedText = {
  fr: string;
  en: string;
  de: string;
};

export type ActivitiesPhoto = {
  src: string;
  alt: LocalisedText | string;
  legend: {
    fr: string;
    en: string;
    de: string;
  };
  size?: "large";
};
