import { DropdownMenu } from "radix-ui";
import { LuMenu } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import type { NavbarProps } from "@/types/i18n";
import LocaleSwitcher from "./LocaleSwitcher";

const MobileMenu = ({ locale, messages }: NavbarProps) => {
  const { home, gite, alentours, avis, contact } = messages;
  const base = `/${locale}`;

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button className="btn-ghost btn p-0 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer">
          <LuMenu size={36} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          align="start"
          className="z-50 rounded-lg fabric-surface-light font-bold text-primary p-0.5 shadow-md"
        >
          <DropdownMenu.Item asChild>
            <Link href={base} className="menu-link block">
              {home.label}
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="navigation-menu-trigger">
              <span>{gite.label}</span>
              <FaChevronRight className="h-3 w-3 ml-2" />
            </DropdownMenu.SubTrigger>

            <DropdownMenu.SubContent
              sideOffset={-9}
              className="menu-sub-content fabric-surface-light py-2 w-44 sm:w-64"
            >
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/notre-gite/sejour`}
                  className="menu-link block"
                >
                  {gite.sejour}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/notre-gite/chambre-cerisier`}
                  className="menu-link block"
                >
                  {gite.chambreCerisier}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/notre-gite/chambre-grange`}
                  className="menu-link block"
                >
                  {gite.chambreGrange}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/notre-gite/chambre-aurores`}
                  className="menu-link block"
                >
                  {gite.chambreAurores}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/notre-gite/chambre-jardin-des-senteurs`}
                  className="menu-link block"
                >
                  {gite.chambreJardinDesSenteurs}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/notre-gite/espace-bien-etre`}
                  className="menu-link block"
                >
                  {gite.bienEtre}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/notre-gite/tarifs`}
                  className="menu-link block"
                >
                  {gite.tarifs}
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="navigation-menu-trigger">
              <span>{alentours.label}</span>
              <FaChevronRight className="h-3 w-3 ml-2" />
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent
              sideOffset={-9}
              className="menu-sub-content fabric-surface-light py-2 w-44 sm:w-64"
            >
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/les-alentours/village`}
                  className="menu-link block"
                >
                  {alentours.village}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/les-alentours/randonnees`}
                  className="menu-link block"
                >
                  {alentours.randonnees}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/les-alentours/parc-de-wesserling`}
                  className="menu-link block"
                >
                  {alentours.wesserling}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/les-alentours/moulin-a-huile`}
                  className="menu-link block"
                >
                  {alentours.moulin}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/les-alentours/lac-de-kruth-wildenstein`}
                  className="menu-link block"
                >
                  {alentours.lac}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/les-alentours/et-tout-le-reste`}
                  className="menu-link block"
                >
                  {alentours.leReste}
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
          <DropdownMenu.Item asChild>
            <Link href={`${base}/reviews`} className="menu-link block">
              {avis.label}
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Link href={`${base}/contact`} className="menu-link block">
              {contact.label}
            </Link>
          </DropdownMenu.Item>
          <div className="border-t border-secondary my-2 pt-2 flex justify-center">
            <LocaleSwitcher currentLocale={locale} />
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MobileMenu;
