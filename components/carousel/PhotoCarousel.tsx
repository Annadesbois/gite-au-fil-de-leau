"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

import type { PropType } from "@/types/carousel";

import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselArrows";

const PhotoCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({
    delay:4000,
    stopOnInteraction:false,
  })]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

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
    <section className="w-full max-w-6xl mx-auto">
      <div
        aria-roledescription="carousel"
        className="relative mx-3 md:mx-10 lg:mx-20 my-4"
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
