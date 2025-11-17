import { EmblaOptionsType } from "embla-carousel";
import { ComponentPropsWithRef } from "react";

export type PhotoSlide = {
  src: string;
  alt: string;
};

export type PropType = {
  slides: PhotoSlide[];
  options?: EmblaOptionsType;
};

export type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export type DotButtonProps = ComponentPropsWithRef<"button">;
