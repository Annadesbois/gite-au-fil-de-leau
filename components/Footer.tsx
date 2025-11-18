import Image from "next/image";
import giteDeFrance from "@/public/logos/gite-de-france.png"
import tourismeHandicap from "@/public/logos/label-tourisme-et-handicap.jpg"

const Footer = () => {
  return (
    <footer className="mt-16 mb-8 text-sm grid md:grid-cols-2 gap-8 text-center">
      <div className="flex flex-col items-center gap-4 md:text-start md:items-start">
        <address className="text-neutral-content/70 not-italic">
          <p>
            <a
              href="mailto:giteaufildeleau68@gmail.com"
              className="text-neutral-content hover:text-primary transition-colors"
            >
              giteaufildeleau68@gmail.com
            </a>
          </p>
        </address>
      </div>
      <div className="flex  gap-4 items-center justify-center text-neutral-content/70 md:items-end md:text-end">
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
            width={70}
          />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
