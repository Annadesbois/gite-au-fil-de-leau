import { DropdownMenu } from "radix-ui";
import { LuMenu } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button className="btn-ghost btn p-0 bg-menu-tint rounded-full text-foreground w-11 h-11 flex items-center justify-center cursor-pointer">
          <LuMenu size={36} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          align="start"
          className="z-50 rounded-lg fabric-surface-light text-foreground text-sm font-bold p-2 shadow"
        >
          <DropdownMenu.Item asChild>
            <Link href="/" className="menu-link block">
              Accueil
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="flex items-center justify-between rounded px-3 py-2 text-left hover:bg-surface-2 outline-none cursor-pointer">
              <span>Notre gîte</span>
              <FaChevronRight className="h-3 w-3 ml-2" />
            </DropdownMenu.SubTrigger>

            <DropdownMenu.SubContent className="ml-1 rounded-lg fabric-surface-light p-2 shadow">
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
                  {`La chambre "Cerisier"`}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href="/notre-gite/chambre-grange"
                  className="menu-link block"
                >
                  {`La chambre "Grange"`}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href="/notre-gite/chambre-aurores"
                  className="block rounded px-3 py-2 hover:bg-surface-2"
                >
                  {`La chambre "Aurores"`}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href="/notre-gite/chambre-jardin-des-senteurs"
                  className="menu-link block"
                >
                  {`La chambre "Jardin des Senteurs"`}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href="/notre-gite/espace-bien-etre"
                  className="menu-link block"
                >
                  {`L'espace bien-être`}
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="flex items-center justify-between rounded px-3 py-2 text-left hover:bg-surface-2 outline-none cursor-pointer">
              <span>Les alentours</span>
              <FaChevronRight className="h-3 w-3 ml-2" />
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent className="ml-1 rounded-lg fabric-surface-light p-2 shadow">
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
