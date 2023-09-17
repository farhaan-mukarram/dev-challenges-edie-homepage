const navbarLinks = ["home", "services", "our works", "clients", "contact"];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-11">
      <div>
        <a href="#">
          <h2 className="text-4xl font-extrabold font-heebo">Edie</h2>
        </a>
      </div>

      <ul className="flex items-center text-2xl font-medium gap-x-14">
        {navbarLinks.map((link) => (
          <li key={link}>
            <a href="#" className="capitalize">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
