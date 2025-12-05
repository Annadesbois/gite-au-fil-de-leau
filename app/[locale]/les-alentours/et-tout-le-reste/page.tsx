import Gallery from "@/components/Gallery";
import { activitiesPhotos } from "@/data/activities-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("reste");

export { generateMetadata };

const EtToutLeRestePage = async ({ params }: PageProp) => {
  const reste = await getPageMessages(params);
  const { locale } = await params;

  return (
    <div className="page-layout">
      <h1 className="fabric-surface-light title-block">{reste.title}</h1>
      <Gallery photos={activitiesPhotos} locale={locale}/>
    </div>
  );
};
export default EtToutLeRestePage;
