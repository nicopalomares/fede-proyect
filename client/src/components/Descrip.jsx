import React from "react";
import style from "./Descrip.module.css";

export default function Descrip() {
  return (
    <div>
      <div className={style.content}>
        <h1 className={style.titulo}>¿Que es QRIO?</h1>
        <p className={style.parrafo}>
          Qrio es un concepto simple. Paga y llevate lo que necesitas.
          <br />
          Un modulo que transforma lo que necesites en un pago simple por QR
        </p>
      </div>
      <div className={style.subTitle}>
        <h4>Productos QRIO</h4>
      </div>
      <div className={style.products}>
        PRODUCTOS
      </div>
    </div>
  );
}
