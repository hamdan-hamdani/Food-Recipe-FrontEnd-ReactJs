import React, { Component } from "react";
import NavigasiLink from "../../componen/NavigasiLink";
import SearchRecipe from "../../componen/SearchRecipe";
import User from "../../componen/User";
import style from "./Chat.module.css";
import masking from "../../img/egg.svg";
import onlineicon from "../../img/onlineicon.svg";

export default class Chat extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.leftContent}>
          <NavigasiLink />
          <div className={style.boxSearchRecipe}>
            <SearchRecipe />
          </div>
        </div>
        <div className={style.rightContent}>
          <User />
          <div className={style.boxImage}>
            <img src={masking} alt="food" />
          </div>
          <div className={style.contentchatadmin}>
            <div className={style.boximageonlineicon}>
              <img src={onlineicon} alt="online icon" />
            </div>
            <span>Chat Admin</span>
          </div>
        </div>
      </div>
    );
  }
}
