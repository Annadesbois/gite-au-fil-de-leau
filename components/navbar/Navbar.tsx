import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import type { NavbarProps } from "@/types/i18n";

const Navbar = ({ locale, messages }: NavbarProps) => {
  const base = `/${locale}`;

  return (
    <nav className="grid grid-cols-[1fr_2fr_1fr] md:flex md:justify-center h-16 w-full relative fabric-surface-light">
      <div className="md:hidden flex items-center ml-4">
        <MobileMenu locale={locale} messages={messages} />
      </div>
      <Link
        href={base}
        className="flex items-center justify-center md:justify-start md:ml-4 "
      >
        <h1 className="font-bold text-2xl whitespace-nowrap text-secondary">
          Gîte Au fil de l'eau
        </h1>
      </Link>
      <div className="hidden md:flex md:items-center md:justify-end w-full md:mr-4">
        <DesktopMenu locale={locale} messages={messages} />
      </div>
    </nav>
  );
};
export default Navbar;
