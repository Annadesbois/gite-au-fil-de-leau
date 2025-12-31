"use client";

import React, { ComponentPropsWithRef, useCallback } from "react";

import { EmblaCarouselType } from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { UsePrevNextButtonsType } from "@/types/carousel";

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  return {
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (restProps) => {
  return (
    <button
      aria-label="Slide précédent"
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/50 shadow-lg flex items-center justify-center transition-all"
      type="button"
      {...restProps}
    >
      <IoIosArrowBack className="w-8 h-8 text-gray-800" />
    </button>
  );
};

export const NextButton: React.FC<PropType> = (restProps) => {
  return (
    <button
      aria-label="Slide suivant"
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/50 shadow-lg flex items-center justify-center transition-all"
      type="button"
      {...restProps}
    >
      <IoIosArrowForward className="w-8 h-8 text-gray-800" />
    </button>
  );
};
