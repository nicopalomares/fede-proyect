import React from "react";
import style from "./NavBar.module.css";

import { Link, animateScroll as scroll } from "react-scroll";

export default function NavLinks({ isMobile, closeMobileMenu }) {
  return (
    <ul className={style.navLinks}>
      <li onClick={() => isMobile && closeMobileMenu()} className = {style.links}>
        <Link>Que somos?</Link>
      </li>
      <li onClick={() => isMobile && closeMobileMenu()} className = {style.links}>
        <Link>Contactanos</Link>
      </li>
    </ul>
  );
}
