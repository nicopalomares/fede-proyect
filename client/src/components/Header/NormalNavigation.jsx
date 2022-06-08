import React from "react";
import NavLinks from "./NavLinks";
import style from "./NavBar.module.css";
import QRIO from "../icons/QRIO"

export default function NormalNavigation() {
  return (
    <div className={style.normalNavigation}>
      <QRIO className = {style.logo}/>
      <NavLinks />
    </div>
  );
}
