import Link from "next/link";

import { DropdownMenu } from "radix-ui";
import { FaChevronRight } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

import LocaleSwitcher from "./LocaleSwitcher";

import type { NavbarProps } from "@/types/i18n";

const MobileMenu = ({ locale, messages }: NavbarProps) => {
  const { home, gite, around, reviews, contact } = messages;
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
                <Link href={`${base}/gite/living-room`} className="menu-link block">
                  {gite.livingRoom}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/gite/cerisier-room`}
                  className="menu-link block"
                >
                  {gite.cerisierRoom}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/gite/grange-room`}
                  className="menu-link block"
                >
                  {gite.grangeRoom}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/gite/aurores-room`}
                  className="menu-link block"
                >
                  {gite.auroresRoom}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/gite/jardin-des-senteurs-room`}
                  className="menu-link block"
                >
                  {gite.jardinDesSenteursRoom}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/gite/wellness`}
                  className="menu-link block"
                >
                  {gite.wellness}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link href={`${base}/gite/price`} className="menu-link block">
                  {gite.price}
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="navigation-menu-trigger">
              <span>{around.label}</span>
              <FaChevronRight className="h-3 w-3 ml-2" />
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent
              sideOffset={-9}
              className="menu-sub-content fabric-surface-light py-2 w-44 sm:w-64"
            >
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/around/village`}
                  className="menu-link block"
                >
                  {around.village}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/around/hiking`}
                  className="menu-link block"
                >
                  {around.hiking}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/around/wesserling-park`}
                  className="menu-link block"
                >
                  {around.wesserling}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/around/oil-mill`}
                  className="menu-link block"
                >
                  {around.mill}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/around/lake-kruth-wildenstein`}
                  className="menu-link block"
                >
                  {around.lake}
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <Link
                  href={`${base}/around/everything-else`}
                  className="menu-link block"
                >
                  {around.everythingElse}
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
          <DropdownMenu.Item asChild>
            <Link href={`${base}/reviews`} className="menu-link block">
              {reviews.label}
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
