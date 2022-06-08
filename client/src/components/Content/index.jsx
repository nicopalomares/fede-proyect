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
        <Lottie
          options={defaultOptions}
          className={style.img}
          height={400}
          width={400}
        />
        <div>
        <QRIO />
        <div className={style.text}>Hacela corta, paga con QRIO!</div>
        </div>
      </div>

      <BsFillCaretDownFill className={style.flecha} />
    </div>
  );
}
