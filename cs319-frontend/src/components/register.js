import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../csss/auth.css";
import bg from "./../bg.svg";
import { Link, Redirect } from "react-router-dom";


class Register extends Component {
  state = {};
  handleLogin = e => {
    e.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let studentId = document.getElementById("studentId").value;
    let pss = document.getElementById("pss").value;

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      // update the state of the component with the result here
      var parsed = JSON.parse(xhr.response);
      if (parsed.password === pss) {
        console.log("Logged in succesfully");

        this.setState({ registered: true });
      } else {

      }
    });

    // open the request with the verb and the url
    xhr.open("GET", "https://d7c59928777f.ngrok.io/api/student/register/" + email);
    // send the request
    xhr.send();


  };
  render() {

    if (this.state.registered) {
      return <Redirect to={'/login'} />
    }
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

              <Button id="logBtn" color="primary">
                Register
              </Button>

              <hr />
              <Link to={"/login"}>
                <Button id="regBtn" title="Learn More" color="primary">
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
