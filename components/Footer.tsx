import Image from "next/image";

import giteDeFrance from "@/public/logos/gite-de-france.png";
import tourismeHandicap from "@/public/logos/label-tourisme-et-handicap.jpg";

import type { FooterMessages, FooterProps } from "@/types/i18n";

const Footer = ({ messages }: FooterProps) => {
  const footerMessages = messages as FooterMessages;
  return (
    <footer className="relative flex gap-8 md:gap-12 lg:gap-16 justify-center fabric-surface-light mt-8 py-5">
      <a
        href="https://www.gitesdefrancealsace.net/fr/location/location-gite-storckensohn-au-fil-de-leau-h68g021752?capacity=1"
        aria-label={footerMessages.giteDeFranceAria}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={giteDeFrance}
          alt={footerMessages.giteDeFranceAlt}
          width={140}
        />
      </a>
      <a
        href="https://data.economie.gouv.fr/pages/tourisme-et-handicap/"
        aria-label={footerMessages.tourismeHandicapAria}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={tourismeHandicap}
          alt={footerMessages.tourismeHandicapAlt}
          width={60}
        />
      </a>
    </footer>
  );
};
export default Footer;
