import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./lottie/lightbulb.json";
import style from "./content.module.css";
import { BsFillCaretDownFill } from "react-icons/bs";

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
    <div className={style.content}>
      <Lottie
        options={defaultOptions}
        className={style.img}
        height={400}
        width={400}
      />
      {/* <div className={style.img}> imagen</div> */}
      <div className={style.text}>Hacela corta, paga con QRIO!</div>
      <BsFillCaretDownFill className={style.flecha} />
    </div>
  );
}
