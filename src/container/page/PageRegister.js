import React, { Component } from "react";
import { Link } from "react-router-dom";
import barbeque from "./../../img/barbecue.svg";
import style from "./PageRegister.module.css";

export default class PageRegister extends Component {
  render() {
    return (
      <div className={style.container}>
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
            <h1>Let’s Get Started !</h1>
            <p className="title">Create new account to access all features</p>
            <form action="">
              <div className="email">
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" name="email" id="email" placeholder="Name" />
              </div>
              <div className="email">
                <label htmlFor="name">Email Address*</label>
                <br />
                <input type="text" name="email" id="email" placeholder="Enter email address" />
              </div>
              <div className="email">
                <label htmlFor="name">Phone Number</label>
                <br />
                <input type="text" name="email" id="email" placeholder="08xxxxxxxxxx" />
              </div>
              <div className="email">
                <label htmlFor="name">Create New Password</label>
                <br />
                <input type="password" name="email" id="email" placeholder="Create New Password" />
              </div>
              <div className="password">
                <label htmlFor="password">New Password</label>
                <br />
                <input type="password" id="password" placeholder="New Password" />
              </div>
              <div className="containerAgree">
                <div className="boxChecklis"></div>
                <p>I agree to terms & conditions</p>
              </div>
              <button>Register Account</button>
              <Link to="/forgotpassword">
                <p className="forgotPassword">Forgot Password ?</p>
              </Link>
              <p className="forgotPassword">
                Already have account?
                <Link to="/login">
                  <span className="signUp"> Log in Here</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
