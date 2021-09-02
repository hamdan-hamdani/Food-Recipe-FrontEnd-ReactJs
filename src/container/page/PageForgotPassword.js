import React, { Component } from "react";
import barbeque from "./../../img/barbecue.svg";
import style from "./PageForgotPassword.module.css";

export default class PageLogin extends Component {
  render() {
    return (
      <div className="container">
        <div className="background">
          <div className="masking">
            <div className="containerImg">
              <img src={barbeque} alt="barbeque" />
              <p>Mama Recipe</p>
            </div>
          </div>
        </div>
        <div className="form">
          <div className={style.containerForgotPassword}>
            <h1>Forgot Password?</h1>
            <p className="title">We just need your registered e-mail address to send your password resend</p>
            <form action="">
              <div className="email">
                <label htmlFor="email">E-mail</label>
                <br />
                <input type="text" name="email" id="email" placeholder="examplexxx@gmail.com" />
              </div>
              <button>Send E-mail</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
