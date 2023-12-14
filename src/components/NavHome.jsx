import { useState } from "react";
import logo from "../assets/logo.png";

// REACT ICONS
import { FaBars, FaXmark } from "react-icons/fa6";

// REACT SCROLLBARS
import { Link } from "react-scroll";

const NavHome = () => {
  const [isMenuopen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuopen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "Test", path: "test" },
    { link: "Support", path: "support" },
  ];

  return (
    <>
      <nav className="bg-primary md:px-14 p-4 max-w-screen mx-auto text-secondary fixed top-0 right-0 left-0">
        <div className="text-lg container flex mx-auto justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-secondary">
              <img src={logo} alt="" className="w-10 inline-block items-center" /> <span>E-Buddy</span>
            </a>

            {/* NAVITEMS */}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  to={path}
                  className="block hover:text-orange cursor-pointer">
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {/* DOWNLOAD */}
          <div className="hidden md:flex justify-self-end">
            <a href="/">
              <button className="bg-secondary text-primary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-orange">
                Try Our Mobile App
              </button>
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
              {isMenuopen ? <FaXmark className="w-6 h-6 text-secondary" /> : <FaBars className="w-6 h-6 text-secondary" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-orange text-xl ${
          isMenuopen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}>
        {navItems.map(({ link, path }) => (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            key={link}
            to={path}
            className="block text-primary hover:text-tartiary"
            onClick={toggleMenu}>
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavHome;
