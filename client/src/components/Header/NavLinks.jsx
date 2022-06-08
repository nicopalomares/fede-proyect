import React from "react";
import style from "./NavBar.module.css";

import { Link, animateScroll as scroll } from "react-scroll";


export default function NavLinks({ isMobile, closeMobileMenu }) {
  return (
    <ul className={style.navLinks}>
      <li onClick={() => isMobile && closeMobileMenu()}>
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Que es QRIO?
        </Link>
      </li>
      <li onClick={() => isMobile && closeMobileMenu()}>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Que es QRIO?
        </Link>
      </li>
      <li onClick={() => isMobile && closeMobileMenu()}>
        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Que es QRIO?
        </Link>
      </li>
    </ul>
  );
}
