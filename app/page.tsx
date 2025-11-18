import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { EmblaOptionsType } from "embla-carousel";

const photos = [
  {
    src: "/photos-gite/exterieur/jardin-salon-et-transats.jpg",
    alt: "Salon de jardin et transats dans le jardin du gîte Au fil de l’eau",
  },
  {
    src: "/photos-gite/sejour/sejour-vue-jardin.jpg",
    alt: "Séjour lumineux du gîte Au fil de l’eau avec vue sur le jardin",
  },
];

const OPTIONS: EmblaOptionsType = { loop: true };

export default function Home() {
  return (
    <main>
      <PhotoCarousel slides={photos} options={OPTIONS} />
    </main>
  );
}
