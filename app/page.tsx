import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { EmblaOptionsType } from "embla-carousel";

const photos = [
  { src: "/photos/photo-1.jpg", alt: "photo1" },
  { src: "/photos/photo-2.jpg", alt: "photo2" },
];

const OPTIONS: EmblaOptionsType = { loop: true };

export default function Home() {
  return (
    <main>
      <h1>Gite Au fil de leau</h1>
      <PhotoCarousel slides={photos} options={OPTIONS} />
    </main>
  );
}
