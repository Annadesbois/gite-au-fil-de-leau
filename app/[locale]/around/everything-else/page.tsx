import Gallery from "@/components/Gallery";
import { activitiesPhotos } from "@/data/activities-photos";
import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("else");

export { generateMetadata };

const EverythingElsePage = async ({ params }: PageProp) => {
  const everythingElse = await getPageMessages(params);
  const { locale } = await params;

  return (
    <div className="page-layout">
      <h1 className="fabric-surface-light title-block">
        {everythingElse.title}
      </h1>
      <Gallery photos={activitiesPhotos} locale={locale} />
    </div>
  );
};
export default EverythingElsePage;
