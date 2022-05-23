import React from "react";
import style from "./NavBar.module.css"

export default function NavLinks({isMobile,closeMobileMenu}) {
  return (
      <ul className={style.navLinks}>
        <li onClick={()=>isMobile && closeMobileMenu()}>
          <a href=".contentC">Que es QRIO?</a>
        </li>
        <li onClick={()=>isMobile && closeMobileMenu()}>
          <a href="#2">Que es QRIO?</a>
        </li>
        <li onClick={()=>isMobile && closeMobileMenu()}>
          <a href="#3">Que es QRIO?</a>
        </li>
      </ul>
  );
}
