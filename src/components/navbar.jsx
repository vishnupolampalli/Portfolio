import { Link } from "react-scroll";

function Navbar() {
  const menuItems = [
    "about",
    "skills",
    "projects",
    "certifications",
    "experience",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/95 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        <Link
          to="home"
          smooth={true}
          duration={0}
          className="text-xl font-bold text-white cursor-pointer"
        >
          Polampalli Vishnu
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm text-gray-300">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={0}
              offset={-70}
              className="cursor-pointer hover:text-cyan-400 transition capitalize"
            >
              {item}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;