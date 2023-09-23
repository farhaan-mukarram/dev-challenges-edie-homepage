import DesktopToolbar from "./DesktopToolbar";
import Drawer from "./Drawer";

const navbarLinks = ["home", "services", "our works", "clients", "contact"];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-11">
      <div>
        <a href="#">
          <h2 className="text-4xl font-extrabold font-heebo">Edie</h2>
        </a>
      </div>

      <DesktopToolbar links={navbarLinks} />

      <Drawer links={navbarLinks} />
    </nav>
  );
};

export default Navbar;
