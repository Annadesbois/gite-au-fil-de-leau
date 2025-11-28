import { DropdownMenu } from "radix-ui";
import { LuMenu } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const MobileMenu = () => {
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
          className="z-50 rounded-lg fabric-surface-light font-bold text-primary p-0.5 shadow"
        >
          <DropdownMenu.Item asChild>
            <Link href="/" className="menu-link block">
              Accueil
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="navigation-menu-trigger">
              <span>Notre gîte</span>
              <FaChevronRight className="h-3 w-3 ml-2" />
            </DropdownMenu.SubTrigger>

            <DropdownMenu.SubContent
              sideOffset={-9}
              className="menu-sub-content fabric-surface-light py-2 w-44 sm:w-64"
            >
              <DropdownMenu.Item asChild>
                <Link href="/notre-gite/sejour" className="menu-link block">
                  Le séjour
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href="/notre-gite/chambre-cerisier"
                  className="menu-link block"
                >
                  La chambre "Cerisier"
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href="/notre-gite/chambre-grange"
                  className="menu-link block"
                >
                  La chambre "Grange"
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href="/notre-gite/chambre-aurores"
                  className="menu-link block"
                >
                  La chambre "Aurores"
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href="/notre-gite/chambre-jardin-des-senteurs"
                  className="menu-link block"
                >
                  La chambre "Jardin des Senteurs"
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href="/notre-gite/espace-bien-etre"
                  className="menu-link block"
                >
                  L'espace bien-être
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="navigation-menu-trigger">
              <span>Les alentours</span>
              <FaChevronRight className="h-3 w-3 ml-2" />
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent
              sideOffset={-9}
              className="menu-sub-content fabric-surface-light py-2 w-44 sm:w-64"
            >
              <DropdownMenu.Item asChild>
                <Link href="/les-alentours/village" className="menu-link block">
                  Le village en 3D
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href="/les-alentours/randonnees"
                  className="menu-link block"
                >
                  Randonnées
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href="/les-alentours/parc-de-wesserling"
                  className="menu-link block"
                >
                  Le Parc de Wesserling
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href="/les-alentours/moulin-a-huile"
                  className="menu-link block"
                >
                  Le moulin à huile
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href="/les-alentours/lac-de-kruth-wildenstein"
                  className="menu-link block"
                >
                  Le lac de Kruth-Wildenstein
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href="/les-alentours/et-tout-le-reste"
                  className="menu-link block"
                >
                  Et tout le reste
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
          <DropdownMenu.Item asChild>
            <Link href="/tarifs" className="menu-link block">
              Tarifs
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Link href="/reviews" className="menu-link block">
              Avis
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Link href="/contact" className="menu-link block">
              Contact
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MobileMenu;
