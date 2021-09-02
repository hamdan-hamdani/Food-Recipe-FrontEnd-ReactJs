import React from "react";
import { Link } from "react-router-dom";
import usericon from "../img/usericon.svg";
import style from "./User.module.css";

export default function User() {
  return (
    <div className={style.container}>
      <div className={style.boxUserIcon}>
        <Link to="/login">
          <img src={usericon} alt="user icon" />
        </Link>
      </div>
      <Link to="/login">
        <span>Login </span>
      </Link>
    </div>
  );
}
