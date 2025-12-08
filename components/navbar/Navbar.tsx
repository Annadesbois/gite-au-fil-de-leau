import Link from "next/link";

import DesktopMenu from "./DesktopMenu";
import LocaleSwitcher from "./LocaleSwitcher";
import MobileMenu from "./MobileMenu";

import type { NavbarProps } from "@/types/i18n";

const Navbar = ({ locale, messages }: NavbarProps) => {
  const base = `/${locale}`;

  return (
    <nav className="grid grid-cols-[1fr_2fr_1fr] lg:flex lg:justify-center h-16 w-full relative fabric-surface-light">
      <div className="lg:hidden flex items-center ml-4">
        <MobileMenu locale={locale} messages={messages} />
      </div>
      <Link
        href={base}
        className="flex items-center justify-center lg:justify-start lg:ml-4 "
      >
        <h1 className="font-bold text-2xl whitespace-nowrap text-secondary">
          Gîte Au fil de l'eau
        </h1>
      </Link>
      <div className="hidden lg:flex lg:items-center lg:justify-end w-full lg:mr-4">
        <DesktopMenu locale={locale} messages={messages} />
        <LocaleSwitcher currentLocale={locale} />
      </div>
    </nav>
  );
};
export default Navbar;
