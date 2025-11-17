import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-[1fr_3fr] text-foreground sticky top-0 z-40 md:flex md:justify-center h-16">
      <div className="md:hidden flex mt-6 ml-6">
        <MobileMenu />
      </div>
      <div className="hidden md:flex md:items-center md:justify-center w-full fabric-surface-light">
        <DesktopMenu />
      </div>
    </nav>
  );
};
export default Navbar;
