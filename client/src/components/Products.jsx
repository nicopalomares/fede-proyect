import React from "react";
import style from "./Products.module.css"

export default function Products() {
  return (
    <div className={style.content}>
      <div className={style.subTitle}>
        <h4>Productos QRIO</h4>
      </div>
      <div className={style.products}>PRODUCTOS</div>
    </div>
  );
}
