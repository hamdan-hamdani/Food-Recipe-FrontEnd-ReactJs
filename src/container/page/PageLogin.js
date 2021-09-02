import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../Authentication/ProvideAuth";
import barbeque from "./../../img/barbecue.svg";

// let location = useLocation();
// import React from 'react'

// export default  {
//   return (
//     <div>

//     </div>
//   )
// }

export default function PageLogin() {
  // state = {
  //   email: "",
  //   password: "",
  // };
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };
  let auth = useAuth();

  function onChangeEmail(e) {
    // this.setState({ email: e.target.value });
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
    // this.setState({ password: e.target.value });
  }

  function onClickLogin(email, password) {
    console.log(email, password);
    auth.signin((email, password) => {
      history.replace(from);
    });
  }

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
          <h1>Welcome</h1>
          <p className="title">Log in into your exiting account</p>
          <form action="">
            <div className="email">
              <label htmlFor="email">E-mail</label>
              <br />
              <input onChange={() => null} type="text" name="email" id="email" placeholder="examplexxx@gmail.com" />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <br />
              <input onChange={() => null} type="password" id="password" />
            </div>
            <div className="containerAgree">
              <div className="boxChecklis"></div>
              <p>I agree to terms & conditions</p>
            </div>
            <button onClick={() => null}>Log in</button>
            <Link to="/forgotpassword">
              <p className="forgotPassword">Forgot Password ?</p>
            </Link>
            <p className="forgotPassword">
              Don’t have an account?{" "}
              <Link to="/register">
                <span className="signUp">Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
