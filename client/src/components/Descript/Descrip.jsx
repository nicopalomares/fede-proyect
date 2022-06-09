import React from "react";
import style from "./Descrip.module.css";
import Lottie from "react-lottie";
import * as animationData from "./assets/lottie3.json";


export default function Descrip() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
      <div className={style.content}>
        <h1 className={style.titulo}>¿Que es QRIO?</h1>
        <Lottie
          options={defaultOptions}
          className={style.img}
          height={400}
          width={400}
        />
        <p className={style.parrafo}>
          Qrio es un concepto simple. Paga y llevate lo que necesitas.
          <br />
          Un modulo que transforma lo que necesites en un pago simple por QR
        </p>
      </div>
  );
}
