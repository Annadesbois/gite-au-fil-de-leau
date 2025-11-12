import { NavigationMenu } from "radix-ui";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex md:items-center md:justify-center w-full">
      <NavigationMenu.Root className="relative">
        <NavigationMenu.List className="flex items-center gap-2 p-1 ">
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium rounded-md hover:bg-surface-1 transition-colors"
              >
                Accueil
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="relative">
            <NavigationMenu.Trigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md hover:bg-surface-1 transition-colors group">
              Notre gîte
              <FaChevronDown
                className="w-3 h-3 transition-transform duration-250 group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute top-full left-0 mt-2 min-w-max bg-surface-1 rounded-box shadow-lg p-2 z-50">
              <ul className="space-y-1">
                <li>
                  <NavigationMenu.Link asChild>
                    <Link
                      href="/notre-gite/sejour"
                      className="block px-4 py-2 text-sm rounded-md hover:bg-surface-2 transition-colors"
                    >
                      Le séjour
                    </Link>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link asChild>
                    <Link
                      href="/notre-gite/chambre-cerisier"
                      className="block px-4 py-2 text-sm rounded-md hover:bg-surface-2 transition-colors"
                    >
                      {`La chambre "Cerisier"`}
                    </Link>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link asChild>
                    <Link
                      href="/notre-gite/chambre-grange"
                      className="block px-4 py-2 text-sm rounded-md hover:bg-surface-2 transition-colors"
                    >
                      {`La chambre "Grange"`}
                    </Link>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link asChild>
                    <Link
                      href="/notre-gite/chambre-aurores"
                      className="block px-4 py-2 text-sm rounded-md hover:bg-surface-2 transition-colors"
                    >
                      {`La chambre "Aurores"`}
                    </Link>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link asChild>
                    <Link
                      href="/notre-gite/chambre-jardin-des-senteurs"
                      className="block px-4 py-2 text-sm rounded-md hover:bg-surface-2 transition-colors"
                    >
                      {`La chambre "Jardin des Senteurs"`}
                    </Link>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link asChild>
                    <Link
                      href="/notre-gite/espace-bien-etre"
                      className="block px-4 py-2 text-sm rounded-md hover:bg-surface-2 transition-colors"
                    >
                      {`L'espace bien-être`}
                    </Link>
                  </NavigationMenu.Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="relative">
            <NavigationMenu.Trigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md hover:bg-surface-1 transition-colors group">
              Les alentours
              <FaChevronDown
                className="w-3 h-3 transition-transform duration-250 group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute top-full left-0 mt-2 min-w-max bg-surface-1 rounded-box shadow-lg p-2 z-50">
              <ul className="space-y-1">
                <li>
                  <NavigationMenu.Link asChild>
                    <Link
                      href="/les-alentours/randonnees"
                      className="block px-4 py-2 text-sm rounded-md hover:bg-surface-2 transition-colors"
                    >
                      Randonnées
                    </Link>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link asChild>
                    <Link
                      href="/les-alentours/parc-de-wesserling"
                      className="block px-4 py-2 text-sm rounded-md hover:bg-surface-2 transition-colors"
                    >
                      Le Parc de Wesserling
                    </Link>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link asChild>
                    <Link
                      href="/les-alentours/moulin-a-huile"
                      className="block px-4 py-2 text-sm rounded-md hover:bg-surface-2 transition-colors"
                    >
                      Le moulin à huile
                    </Link>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link asChild>
                    <Link
                      href="/les-alentours/lac-de-kruth-wildenstein"
                      className="block px-4 py-2 text-sm rounded-md hover:bg-surface-2 transition-colors"
                    >
                      Le lac de Kruth-Wildenstein
                    </Link>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link asChild>
                    <Link
                      href="/les-alentours/et-tout-le-reste"
                      className="block px-4 py-2 text-sm rounded-md hover:bg-surface-2 transition-colors"
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
              <Link
                href="/tarifs"
                className="px-4 py-2 text-sm font-medium rounded-md hover:bg-surface-1 transition-colors"
              >
                Tarifs
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-medium rounded-md hover:bg-surface-1 transition-colors"
              >
                Contact
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
};

export default DesktopMenu;
