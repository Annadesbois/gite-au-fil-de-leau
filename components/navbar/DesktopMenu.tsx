import { NavigationMenu } from "radix-ui";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import type { NavbarProps } from "@/types/i18n";

const DesktopMenu = ({ locale, messages }: NavbarProps) => {
  const { home, gite, alentours, tarifs, avis, contact } = messages;
  const base = `/${locale}`;

  return (
    <NavigationMenu.Root className="relative">
      <NavigationMenu.List className="flex items-center md:ml-2 lg:gap-2 font-bold">
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href={base} className="menu-link">
              {home.label}
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="navigation-menu-trigger">
            {gite.label}
            <FaChevronDown
              className="w-3 h-3 transition-transform duration-250 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="fabric-surface-light menu-sub-content absolute min-w-max top-full left-0 p-2 mt-2">
            <ul className="space-y-1">
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/notre-gite/sejour`}
                    className="block menu-link"
                  >
                    {gite.sejour}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/notre-gite/chambre-cerisier`}
                    className="block menu-link"
                  >
                    {gite.chambreCerisier}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/notre-gite/chambre-grange`}
                    className="block menu-link"
                  >
                    {gite.chambreGrange}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/notre-gite/chambre-aurores`}
                    className="block menu-link"
                  >
                    {gite.chambreAurores}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/notre-gite/chambre-jardin-des-senteurs`}
                    className="block menu-link"
                  >
                    {gite.chambreJardinDesSenteurs}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/notre-gite/espace-bien-etre`}
                    className="block menu-link"
                  >
                    {gite.bienEtre}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/notre-gite/tarifs`}
                    className="block menu-link"
                  >
                    {gite.tarifs}
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="navigation-menu-trigger">
            {alentours.label}
            <FaChevronDown
              className="w-3 h-3 transition-transform duration-250 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="fabric-surface-light menu-sub-content absolute min-w-max top-full left-0 p-2 mt-2">
            <ul className="space-y-1">
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/les-alentours/village`}
                    className="block menu-link"
                  >
                    {alentours.village}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/les-alentours/randonnees`}
                    className="block menu-link"
                  >
                    {alentours.randonnees}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/les-alentours/parc-de-wesserling`}
                    className="block menu-link"
                  >
                    {alentours.wesserling}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/les-alentours/moulin-a-huile`}
                    className="block menu-link"
                  >
                    {alentours.moulin}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/les-alentours/lac-de-kruth-wildenstein`}
                    className="block menu-link"
                  >
                    {alentours.lac}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/les-alentours/et-tout-le-reste`}
                    className="block menu-link"
                  >
                    {alentours.leReste}
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href={`${base}/reviews`} className="menu-link">
              {avis.label}
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href={`${base}/contact`} className="menu-link">
              {contact.label}
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default DesktopMenu;
