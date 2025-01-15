import React from "react";
import logo from "../../../assets/no-background-logo.png";
import style from "../styles/logo.module.css";
function Logo() {
  return (
    <div className={style["logo-container"]}>
      <div className={style["logo-border"]}>
        <img className={style["logo-img"]} src={logo} alt="" />
      </div>
      <span className={style["logo-name"]}>StayAway</span>
    </div>
  );
}

export default Logo;
