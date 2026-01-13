import { createPageHelpers } from "@/lib/metadata";

import type { PageProp } from "@/types/i18n";

const { generateMetadata, getPageMessages } = createPageHelpers("price");

export { generateMetadata };

const Price = async ({ params }: PageProp) => {
  const price = await getPageMessages(params);
  return (
    <div className="page-layout">
      <h1 className="fabric-surface-light title-block">{price.title}</h1>
      <div className="content-area fabric-surface-light description-page-layout">
        <p className="font-bold mb">{price.details}</p>
        <ul>
          <li>{price.nights.two}</li>
          <li>{price.nights.three}</li>
          <li>{price.nights.four}</li>
          <li>{price.nights.five}</li>
          <li>{price.nights.six}</li>
          <li>{price.nights.seven}</li>
        </ul>
        <p className="font-bold mt-10 text-center">{price.cleaning}</p>
      </div>
    </div>
  );
};
export default Price;
