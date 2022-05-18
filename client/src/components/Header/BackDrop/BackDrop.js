import React from 'react'
import style from "./BackDrop.module.css"

export default function BackDrop({click}) {
  return (
    <div onClick={click} className={style.backDrop} >

    </div>
  )
}
