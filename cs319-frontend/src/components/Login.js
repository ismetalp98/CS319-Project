import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../csss/auth.css";
import React from "react";
import bg from "./../bg.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function login() {
  let email = document.getElementById("email").value;
  let pss = document.getElementById("pss").value;
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", () => {
    // update the state of the component with the result here
    var parsed = JSON.parse(xhr.response);
    if (parsed.password == pss) {
      console.log("Logged in succesfully");

      //Insert redirection here
    } else console.log("Login failed.");
  });

  // open the request with the verb and the url
  xhr.open("GET", "https://d7c59928777f.ngrok.io/api/student/login/" + email);
  // send the request
  xhr.send();
}

function Login() {
  return (
    <div className="register_class column">
      <div className="logo_login_register">
        <img id="bg" src={bg} alt="bg" />
      </div>
      <div className="register_form_div">
        <div className="register_form">
          <form className="form">
            <h1>Login</h1>
            <hr />
            <div className="search_form_div">
              <div className="input">
                <input
                  id="email"
                  placeholder="E-mail"
                  autoComplete="off"
                  type="text"
                />
              </div>
            </div>

            <div className="search_form_div">
              <div className="input">
                <input
                  id="pss"
                  placeholder="Password"
                  autoComplete="off"
                  type="password"
                />
              </div>
            </div>

            <Button id="logBtn" color="#841584" onClick={login}>
              Login
            </Button>

            <hr />

            <Link to="/register">
              <Button id="regBtn" title="Learn More" color="#841584">
                Register
              </Button>
            </Link>

            <div className="forgot_div">
              <hr />
              <h3> or </h3>
              <hr />
            </div>

            <h3 id="forgotpss"> Forgot My Password </h3>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
