import React from "react";
import tCss from "./Two.module.css";

const Two = ({ img, step, h, p }) => {
  return (
    <div className={tCss["block"]}>
      <img src={img} alt="" />
      <p className={tCss["step"]}>шаг {step}</p>
      <h2>{h}</h2>
      <p className={tCss["dec"]}>{p}</p>
    </div>
  );
};

export default Two;
