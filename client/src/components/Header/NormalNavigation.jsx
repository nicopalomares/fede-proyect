import React from "react";
import NavLinks from "./NavLinks";
import style from "./NavBar.module.css";
import QRIO from "../icons/QRIO"
import logo from "../icons/Group5.png"

export default function NormalNavigation() {
  return (
    <div className={style.normalNavigation}>
      <img src={logo}/>
      <NavLinks />
    </div>
  );
}
