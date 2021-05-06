import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../css/auth.css";
import bg from "./../bg.svg";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Register extends Component {
  state = {};

  //
  handleRegister = e => {
    e.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email_register").value;
    let studentId = document.getElementById("studentId").value;
    let pss = document.getElementById("pss").value;
    let pss2 = document.getElementById("pss2").value;
    var data = {
      "email": email,
      "studentid": studentId,
      "name": firstname,
      "surname": lastname,
      "password": pss
    };

    //check inputs
    if (email.includes("@ug.bilkent.edu.tr") && pss.length >= 8 &&
      firstname.length > 1 &&
      lastname.length > 1 &&
      studentId.length >= 8) {

      if (pss !== pss2) {
        toast.error("Passwords does not match.");
      } else {
        var json = JSON.stringify(data);
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("load", () => {
          // update the state of the component with the result here
          if (xhr.status === 200) {
            toast.success("Successfully Registered");
            localStorage.setItem('currentUserMail', email);
            this.setState({ registered: true });
          }
        });
        // open the request with the verb and the url

        xhr.open("POST", "http://d7c59928777f.ngrok.io/api/student/create/");
        xhr.setRequestHeader("Content-Type", "application/json");
        // send the request
        xhr.send(json);
      }
    } else {
      toast.error("Your mail adress and password is not in proper format!");
    }
  }
  render() {

    if (this.state.registered) {
      return <Redirect to={'/login'} />
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
                <h1>Register</h1>
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
                      id="studentId"
                      placeholder="Student ID"
                      autoComplete="off"
                      type="text"
                      title="At least 8 characters"
                    />
                  </div>
                </div>
                <div className="search_form_div">
                  <div className="input">
                    <input
                      id="email_register"
                      placeholder="E-mail"
                      autoComplete="off"
                      type="text"
                      title="Please use @ug.bilkent.edu.tr domain."
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

                <Button id="logBtn" variant="contained" color="primary" onClick={this.handleRegister}>
                  Register
              </Button>

                <ToastContainer />

                <hr />
                <Link to={"/login"}>
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
export default Register;
