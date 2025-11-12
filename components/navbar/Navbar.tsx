import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu"

const Navbar = () => {
  return (
    <nav className="bg-base-100 grid grid-cols-[1fr_3fr] text-base-content shadow-sm sticky top-0 z-40 md:flex md:justify-center h-16">
      <div className="md:hidden flex justify-start items-center">
        <MobileMenu />
      </div>
      <div className="flex-none hidden md:flex md:mx-auto">
        <DesktopMenu />
      </div>
    </nav>
  );
}
export default Navbar