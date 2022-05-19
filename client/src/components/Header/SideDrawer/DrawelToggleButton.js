import React from 'react'
import { BsList } from "react-icons/bs";

export default function DrawelToggleButton({ click }) {
  return (
    <div onClick={click}>
        <BsList style={{width:"45px"}}/>
    </div>
  )
}
