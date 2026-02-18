import Link from "next/link";

import { FaChevronDown } from "react-icons/fa";
import { NavigationMenu } from "radix-ui";

import type { NavbarProps } from "@/types/i18n";

const DesktopMenu = ({ locale, messages }: NavbarProps) => {
  const { home, gite, around, reviews, contact } = messages;
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
                    href={`${base}/gite/living-room`}
                    className="block menu-link"
                  >
                    {gite.livingRoom}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/gite/cerisier-room`}
                    className="block menu-link"
                  >
                    {gite.cerisierRoom}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/gite/grange-room`}
                    className="block menu-link"
                  >
                    {gite.grangeRoom}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/gite/aurores-room`}
                    className="block menu-link"
                  >
                    {gite.auroresRoom}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/gite/sous-bois-room`}
                    className="block menu-link"
                  >
                    {gite.sousBoisRoom}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/gite/wellness`}
                    className="block menu-link"
                  >
                    {gite.wellness}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link href={`${base}/gite/price`} className="block menu-link">
                    {gite.price}
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="navigation-menu-trigger">
            {around.label}
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
                    href={`${base}/around/village`}
                    className="block menu-link"
                  >
                    {around.village}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/around/hiking`}
                    className="block menu-link"
                  >
                    {around.hiking}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/around/wesserling-park`}
                    className="block menu-link"
                  >
                    {around.wesserling}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/around/oil-mill`}
                    className="block menu-link"
                  >
                    {around.mill}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/around/lake-kruth-wildenstein`}
                    className="block menu-link"
                  >
                    {around.lake}
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href={`${base}/around/everything-else`}
                    className="block menu-link"
                  >
                    {around.everythingElse}
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href={`${base}/reviews`} className="menu-link">
              {reviews.label}
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
