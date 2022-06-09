import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../assets/lottie/lottie2.json";

import style from "./content.module.css";
import { BsFillCaretDownFill } from "react-icons/bs";
import QRIO from "../icons/QRIO";

export default function Content() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={style.contentC}>
      <div className={style.contentImport}>
        <div className={style.img}>
          <Lottie
            options={defaultOptions}
            height={"80%"}
            width={"80%"}
          />
        </div>
        <div>
          <QRIO />
          <h3 className={style.titulo}>Hacela corta ,Paga usando QRIO!</h3>
          <br />
          <div className={style.text}>
            QRIO, es un sistema de automatización de acciones a través de pagos
            electronicos.Hacemos que la vida, sea más simple.
            <br />
            <br />
            Tranquilo, ya estamos llegando...
          </div>
        </div>
      </div>

      <BsFillCaretDownFill className={style.flecha} />
    </div>
  );
}
