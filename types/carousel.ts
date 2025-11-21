import { EmblaOptionsType } from "embla-carousel";

export type PhotoSlide = {
  src: string;
  alt: string;
};

export type PropType = {
  slides: PhotoSlide[];
  options?: EmblaOptionsType;
};

export type UsePrevNextButtonsType = {
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};
