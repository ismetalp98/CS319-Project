import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../csss/auth.css";
import "../style.css";
import bg from "./../bg.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function register() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let studentId = document.getElementById("studentId").value;
  let pss = document.getElementById("pss").value;

  if (!email.includes("@ug.bilkent.edu.tr")) {
  }
  if (pss.length < 6) {
  }
}

class Register extends Component {
  render() {
    return (
      <div className="register_class column">
        <div className="logo_login_register">
          <img id="bg" src={bg} alt="bg" width="100%" />
        </div>
        <div className="register_form_div">
          <div className="register_form">
            <form className="form">
              <h1>Register</h1>
              <hr />
              <div className="search_form_div">
                <div className="input">
                  <input
                    id="firstname"
                    placeholder="First Name"
                    autoComplete="off"
                    type="text"
                  />
                </div>
              </div>
              <div className="search_form_div">
                <div className="input">
                  <input
                    id="lastname"
                    placeholder="Last Name"
                    autoComplete="off"
                    type="text"
                  />
                </div>
              </div>
              <div className="search_form_div">
                <div className="input">
                  <input
                    id="email"
                    placeholder="Student ID"
                    autoComplete="off"
                    type="text"
                  />
                </div>
              </div>
              <div className="search_form_div">
                <div className="input">
                  <input
                    id="studentId"
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

              <Button id="logBtn" color="#841584">
                Register
              </Button>

              <hr />
              <Link to="/login">
                <Button id="regBtn" title="Learn More" color="#841584">
                  Login
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
