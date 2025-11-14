import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-[1fr_3fr] text-foreground sticky top-0 z-40 md:flex md:justify-center h-16">
      <div className="md:hidden flex justify-start items-center">
        <MobileMenu />
      </div>
      <div className="flex-none hidden md:flex md:mx-auto w-full fabric-surface-light">
        <DesktopMenu />
      </div>
    </nav>
  );
};
export default Navbar;
