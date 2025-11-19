import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-[1fr_2fr_1fr] sticky top-0 z-40 md:flex md:justify-center h-16 w-full fabric-surface-light">
      <div className="md:hidden flex items-center ml-6 text-primary">
        <MobileMenu />
      </div>
      <Link
        href="/"
        className="flex items-center justify-center md:justify-start md:ml-4 lg:absolute md:left-6 lg:h-16 lg:shrink-0"
      >
        <h1 className="font-bold text-xl whitespace-nowrap text-secondary">{`Gîte Au fil de l'eau`}</h1>
      </Link>
      <div className="hidden md:flex md:items-center md:justify-center w-full fabric-surface-light text-primary">
        <DesktopMenu />
      </div>
    </nav>
  );
};
export default Navbar;
