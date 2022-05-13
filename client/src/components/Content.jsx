import React from 'react'
import style from "./content.module.css"
import { BsFillCaretDownFill } from "react-icons/bs";

export default function Content() {
  return (
    <div className={style.content}>
        <div className={style.img}> imagen</div>
        <div className={style.text}>Hacela Corta, Paga Con QRIO</div>
        < BsFillCaretDownFill className={style.flecha}/>
    </div>
  )
}
