import Image from "next/image";
import giteDeFrance from "@/public/logos/gite-de-france.png"
import tourismeHandicap from "@/public/logos/label-tourisme-et-handicap.jpg"

const Footer = () => {
  return (
    <footer className="relative mt-16 py-5 text-sm grid gap-4 text-center items-center justify-center">
      <div className="flex gap-12 items-center justify-center text-neutral-content/70 md:items-end md:text-end fabric-surface-light">
        <a
          href="https://www.gitesdefrancealsace.net/fr/location/location-gite-storckensohn-au-fil-de-leau-h68g021752?capacity=1"
          aria-label="Lien vers le site de Gite de France Alsace"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={giteDeFrance}
            alt="Gite de France et 4 épis logo"
            width={140}
          />
        </a>
        <a
          href="https://data.economie.gouv.fr/pages/tourisme-et-handicap/"
          aria-label="Lien vers la cartographie des établissements labellisés tourisme et handicap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={tourismeHandicap}
            alt="Label Tourisme et Handicap"
            width={60}
          />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
