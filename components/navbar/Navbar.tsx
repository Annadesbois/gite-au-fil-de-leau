import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import type { Locale } from "@/lib/i18n";

type NavbarProps = {
  locale: Locale;
  messages: Record<string, unknown>;
};


const Navbar = ({ locale: _locale, messages: _messages }: NavbarProps) => {
  return (
    <nav className="grid grid-cols-[1fr_2fr_1fr] md:flex md:justify-center h-16 w-full fabric-surface-light">
      <div className="md:hidden flex items-center ml-4">
        <MobileMenu />
      </div>
      <Link
        href="/"
        className="flex items-center justify-center md:justify-start md:ml-4 "
      >
        <h1 className="font-bold text-2xl whitespace-nowrap text-secondary">
          Gîte Au fil de l'eau
        </h1>
      </Link>
      <div className="hidden md:flex md:items-center md:justify-end w-full md:mr-4">
        <DesktopMenu />
      </div>
    </nav>
  );
};
export default Navbar;
