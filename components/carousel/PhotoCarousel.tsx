"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";

import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselArrows";

import type { PropType } from "@/types/carousel";

const DEFAULT_OPTIONS: EmblaOptionsType = { loop: true };

const PhotoCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options ?? DEFAULT_OPTIONS, [
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    }),
  ]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(
    emblaApi,
    onNavButtonClick
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrevButtonClick();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        onNextButtonClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onPrevButtonClick, onNextButtonClick]);

  return (
    <section className="w-full">
      <div
        aria-roledescription="carousel"
        className="relative my-4"
        onMouseEnter={() => emblaApi?.plugins()?.autoplay?.stop()}
        onMouseLeave={() => emblaApi?.plugins()?.autoplay?.play()}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {slides.map((slide, index) => (
              <div className="shrink-0 w-full pl-4" key={index}>
                <div className="relative rounded-3xl aspect-3/2 overflow-hidden">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <PrevButton onClick={onPrevButtonClick} />
        <NextButton onClick={onNextButtonClick} />
      </div>
    </section>
  );
};

export default PhotoCarousel;
