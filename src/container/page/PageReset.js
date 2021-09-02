import React, { Component } from "react";
import barbeque from "./../../img/barbecue.svg";

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
          <div>
            <form action="">
              <div className="email">
                <label htmlFor="email">Code 6 Digit</label>
                <br />
                <input type="text" name="email" id="email" placeholder="" />
              </div>
              <button>Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
