import type { LocalisedText } from "./localisedText";

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
