import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/nobg.png";
import { Link } from "react-scroll";
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 600 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-265} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-270}
            duration={500}
            className="btn"
          >
            Contacts
          </Link>
        </li>
      </ul>
      <img src={menu} className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
