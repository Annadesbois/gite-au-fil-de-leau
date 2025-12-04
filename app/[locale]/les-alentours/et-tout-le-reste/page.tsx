import Gallery from "@/components/Gallery"
import { activitiesPhotos } from "@/data/activities-photos"

const EtToutLeRestePage = () => {
  return (
    <div className="page-layout">
      <h1 className="fabric-surface-light title-block">Et tout le reste</h1>
      <Gallery photos={activitiesPhotos} />
    </div>
  )
}
export default EtToutLeRestePage