import React from 'react'
import style from "./Header.module.css"
export default function Header() {
  return (
    <div className={style.content}>
        <div className={style.nav}>
            <p>¿Que Es QRIO?</p>
            <p>Productos QRIO?</p>
            <p>Contactanos</p>
        </div>
        
    </div>
  )
}
