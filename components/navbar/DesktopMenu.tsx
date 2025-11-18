import { NavigationMenu } from "radix-ui";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const DesktopMenu = () => {
  return (
    <NavigationMenu.Root className="relative">
      <NavigationMenu.List className="flex items-center gap-2 p-1 text-sm font-bold">
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/" className="menu-link">
              Accueil
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="navigation-menu-trigger">
            Notre gîte
            <FaChevronDown
              className="w-3 h-3 transition-transform duration-250 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="fabric-surface-light menu-sub-content menu-sub-content-desktop">
            <ul className="space-y-1">
              <li>
                <NavigationMenu.Link asChild>
                  <Link href="/notre-gite/sejour" className="block menu-link">
                    Le séjour
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/notre-gite/chambre-cerisier"
                    className="block menu-link"
                  >
                    {`La chambre "Cerisier"`}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/notre-gite/chambre-grange"
                    className="block menu-link"
                  >
                    {`La chambre "Grange"`}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/notre-gite/chambre-aurores"
                    className="block menu-link"
                  >
                    {`La chambre "Aurores"`}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/notre-gite/chambre-jardin-des-senteurs"
                    className="block menu-link"
                  >
                    {`La chambre "Jardin des Senteurs"`}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/notre-gite/espace-bien-etre"
                    className="block menu-link"
                  >
                    {`L'espace bien-être`}
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="navigation-menu-trigger">
            Les alentours
            <FaChevronDown
              className="w-3 h-3 transition-transform duration-250 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="fabric-surface-light menu-sub-content menu-sub-content-desktop">
            <ul className="space-y-1">
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/les-alentours/randonnees"
                    className="block menu-link"
                  >
                    Randonnées
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/les-alentours/parc-de-wesserling"
                    className="block menu-link"
                  >
                    Le Parc de Wesserling
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/les-alentours/moulin-a-huile"
                    className="block menu-link"
                  >
                    Le moulin à huile
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/les-alentours/lac-de-kruth-wildenstein"
                    className="block menu-link"
                  >
                    Le lac de Kruth-Wildenstein
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/les-alentours/et-tout-le-reste"
                    className="block menu-link"
                  >
                    Et tout le reste
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/tarifs" className="menu-link">
              Tarifs
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/contact" className="menu-link">
              Contact
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default DesktopMenu;
