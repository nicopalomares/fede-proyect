import React from "react";
import style from "./NavBar.module.css";
import NormalNavigation from "./NormalNavigation";
import MovileNavigation from "./MovileNavigation";
function NavBar() {
  return (
    <div className={style.content}>
      <NormalNavigation />
      <MovileNavigation />
    </div>
  );
}

export default NavBar;
