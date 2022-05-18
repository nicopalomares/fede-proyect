import React, { useState } from "react";
import style from "./Header.module.css"
import NavBar from "./NavBar";
import SideDrawer from "./SideDrawer/SideDrawer";
import BackDrop from "./BackDrop/BackDrop";


function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  let sideDrawer
  let backDrop

  if(open){
    sideDrawer = <SideDrawer className={style.side} show= {open} />
    backDrop=<BackDrop click={handleClick}/>
  }
  return (
    <div>
        <NavBar handleClick = {handleClick}/> 
        <div className={style.mov}>
        {sideDrawer}
        {backDrop}
        </div>
    </div>

  )
}

export default Header;
