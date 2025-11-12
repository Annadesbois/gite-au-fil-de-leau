import MobileMenu from "./MobileMenu"

const Navbar = () => {
  return (
    <div>
      <div className="md:hidden flex justify-start items-center">
        <MobileMenu />
      </div>
    </div>
  );
}
export default Navbar