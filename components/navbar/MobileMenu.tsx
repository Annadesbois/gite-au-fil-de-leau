import { DropdownMenu } from "radix-ui";
import { LuMenu } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="lg:hidden md:hidden">
      <DropdownMenu.Root modal={false}>
        <DropdownMenu.Trigger asChild>
          <LuMenu className="btn-ghost btn p-0" size={36} />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={8}
            align="start"
            className="z-50 rounded-lg fabric-surface-light text-foreground text-sm font-bold p-2 shadow"
          >
            <DropdownMenu.Item asChild>
              <Link
                href="/"
                className="block rounded px-3 py-2 hover:bg-surface-2 outline-none"
              >
                Accueil
              </Link>
            </DropdownMenu.Item>

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger className="flex items-center justify-between rounded px-3 py-2 text-left hover:bg-surface-2 outline-none">
                <span>Notre gîte</span>
                <FaChevronRight className="h-3 w-3 ml-1/70" />
              </DropdownMenu.SubTrigger>

              <DropdownMenu.SubContent className="ml-1 rounded-lg fabric-surface-light p-2 shadow">
                <DropdownMenu.Item asChild>
                  <Link
                    href="/notre-gite/sejour"
                    className="block rounded px-3 py-2 hover:bg-surface-2 outline-none"
                  >
                    Le séjour
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link
                    href="/notre-gite/chambre-cerisier"
                    className="block rounded px-3 py-2 hover:bg-surface-2 outline-none"
                  >
                    {`La chambre "Cerisier"`}
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link
                    href="/notre-gite/chambre-grange"
                    className="block rounded px-3 py-2 hover:bg-surface-2 outline-none"
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
                    className="block rounded px-3 py-2 hover:bg-surface-2 outline-none"
                  >
                    {`La chambre "Jardin des Senteurs"`}
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link
                    href="/notre-gite/espace-bien-etre"
                    className="block rounded px-3 py-2 hover:bg-surface-2 outline-none"
                  >
                    {`L'espace bien-être`}
                  </Link>
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger className="flex items-center justify-between rounded px-3 py-2 text-left hover:bg-surface-2 outline-none">
                <span>Les alentours</span>
                <FaChevronRight className="h-3 w-3 ml-1" />
              </DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent className="ml-1 rounded-lg fabric-surface-light p-2 shadow">
                <DropdownMenu.Item asChild>
                  <Link
                    href="/les-alentours/randonnees"
                    className="block rounded px-3 py-2 hover:bg-surface-2 outline-none"
                  >
                    Randonnées
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link
                    href="/les-alentours/parc-de-wesserling"
                    className="block rounded px-3 py-2 hover:bg-surface-2 outline-none"
                  >
                    Le Parc de Wesserling
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link
                    href="/les-alentours/moulin-a-huile"
                    className="block rounded px-3 py-2 hover:bg-surface-2 outline-none"
                  >
                    Le moulin à huile
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link
                    href="/les-alentours/lac-de-kruth-wildenstein"
                    className="block rounded px-3 py-2 hover:bg-surface-2 outline-none"
                  >
                    Le lac de Kruth-Wildenstein
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link
                    href="/les-alentours/et-tout-le-reste"
                    className="block rounded px-3 py-2 hover:bg-surface-2 outline-none"
                  >
                    Et tout le reste
                  </Link>
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>
            <DropdownMenu.Item asChild>
              <Link
                href="/tarifs"
                className="block rounded px-3 py-2 hover:bg-surface-2 outline-none"
              >
                Tarifs
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Link
                href="/contact"
                className="block rounded px-3 py-2 hover:bg-surface-2 outline-none"
              >
                Contact
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default MobileMenu;
