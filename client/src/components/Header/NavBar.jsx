import React from "react";
import style from "./NavBar.module.css";
import DrawelToggleButton from "./SideDrawer/DrawelToggleButton";
import QRIO from "../icons/QRIO";

function NavBar({ handleClick }) {
  return (
    <div className={style.content}>
      <QRIO className={style.logo} />
      <nav className={style.links}>
        <a href="#1">Que es QRIO?</a>
        <a href="#2">Productos QRIO</a>
        <a href="#3">Contactanos</a>
      </nav>

      <div className={style.mov}>
        <DrawelToggleButton click={handleClick} />
      </div>
    </div>
  );
}

export default NavBar;
