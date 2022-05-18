import React from "react";
import style from "./SideDrawer.module.css";

export default function SideDrawer({show}) {

  let drawerClasses ="side-drawer"
  show=true ? drawerClasses = "side-drawer.open" : null
  return (
    <nav className={drawerClasses}>
      <div className={style.list}>
        <a href="#1">Que es QRIO?</a>
        <a href="#2">Productos QRIO</a>
        <a href="#3">Contactanos</a>
        </div>
    </nav>
  );
}
