import React from "react";
import style from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={style.content}>
      <div className={style.contentForm}>
        <h2>Contactanos</h2>
        <form className={style.form}>
          <input placeholder="Nombre" />
          <br />
          <input placeholder="Email"/>
        </form>
      </div>
      {/* <div className={style.contentButton}> */}
      <button className={style.boton}>Enviar</button>
      {/* </div>s */}
    </div>
  );
}
