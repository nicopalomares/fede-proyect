import React from "react";
import style from "./Contact.module.css";
import img from "../icons/image5.png";
import Lottie from "react-lottie";
import * as animationData from "../assets/lottie/lottie4.json";

export default function Contact() {
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
      <div className={style.content1}>
        <div className={style.contentTitle}>
          <h3>Estamos llegando, en breve estamos afuera...</h3>
        </div>
        <div  className={style.img}>
          <Lottie
            options={defaultOptions}
            height={200}
            width={200}
          />
        </div>
      </div>
      <div className={style.qr}>
        <h3 className={style.info}>Mas Informacion? Contactanos!</h3>
        <img src={img} />
      </div>
    </div>
  );
}
