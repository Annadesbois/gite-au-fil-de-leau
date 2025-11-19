import PhotoCarousel from "@/components/carousel/PhotoCarousel"
import { grangePhotos } from "@/data/grange-photos"

const ChambreGrangePage = () => {
  return (
    <>
    <PhotoCarousel slides={grangePhotos} />
    </>
  )
}
export default ChambreGrangePage