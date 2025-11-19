import PhotoCarousel from "@/components/carousel/PhotoCarousel";
import { cerisierPhotos } from "@/data/cerisier-carousel";

const ChambreCerisierPage = () => {
  return (
    <>
      <PhotoCarousel slides={cerisierPhotos} />
      <h1>{`La chambre "Cerisier"`}</h1>
      
    </>
  );
};
export default ChambreCerisierPage;
