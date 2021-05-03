import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../css/auth.css";
import bg from "./../bg.svg";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class InstructorRegister extends Component {
  state = {};

  handleLogin = e => {
    e.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let pss = document.getElementById("pss").value;
    let pss2 = document.getElementById("pss2").value;
    let code = document.getElementById("instcode").value;

    //check inputs
    if (email.includes("@bilkent.edu.tr") && pss.length >= 8 &&
      firstname.length > 1 &&
      lastname.length > 1) {
      if (pss !== pss2) {
        toast.error("Passwords does not match.");
      }
      else if (code !== 'CS319') {
        toast.error("Wrong intructor code.");
      }
      else {
        var data = {
          "email": email,
          "name": firstname,
          "surname": lastname,
          "password": pss
        };
        var json = JSON.stringify(data);
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("load", () => {
          // update the state of the component with the result here
          if (xhr.status === 200) {
            toast.success("Successfully Registered");
            this.setState({ registered: true });
          }
          else {
            toast.error("Instructor already exists.");
          }
        });
        // open the request with the verb and the url
        xhr.open("POST", "https://d7c59928777f.ngrok.io/api/instructor/create/");
        xhr.setRequestHeader("Content-Type", "application/json");
        // send the request
        xhr.send(json);
      };

    } else {
      toast.error("Please fill empty fields.");
    }
  }

  render() {
    if (this.state.registered) {
      return <Redirect to={'/InstructorLogin'} />
    }
    else {
      return (
        <div className="register_class column">
          <div className="logo_login_register">
            <img id="bg" src={bg} alt="bg" width="100%" />
          </div>
          <div className="register_form_div">
            <div className="register_form">
              <form className="form">
                <h1>Instructor Register</h1>
                <hr />
                <div className="search_form_div">
                  <div className="input">
                    <input
                      id="firstname"
                      placeholder="First Name"
                      autoComplete="off"
                      type="text"
                      title="At least 2 characters"
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
                      title="At least 2 characters"
                    />
                  </div>
                </div>
                <div className="search_form_div">
                  <div className="input">
                    <input
                      id="instcode"
                      placeholder="Instructor Code"
                      autoComplete="off"
                      type="password"
                      title="Required for instructor register"
                    />
                  </div>
                </div>
                <div className="search_form_div">
                  <div className="input">
                    <input
                      id="email"
                      placeholder="E-mail"
                      autoComplete="off"
                      type="text"
                      title="Please use @bilkent.edu.tr domain."
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
                      title="At least 8 characters"
                    />
                  </div>
                </div>

                <div className="search_form_div">
                  <div className="input">
                    <input
                      id="pss2"
                      placeholder="Password Again"
                      autoComplete="off"
                      type="password"
                    />
                  </div>
                </div>

                <Button id="logBtn" variant="contained" color="primary" onClick={this.handleLogin}>
                  Register
              </Button>
                <ToastContainer />

                <hr />
                <Link to={"/InstructorLogin"}>
                  <Button className="regBtn" title="Learn More" variant="contained" color="primary">
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
}
export default InstructorRegister;