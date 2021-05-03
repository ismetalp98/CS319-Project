import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../css/auth.css";
import bg from "./../bg.svg";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var url = "https://d7c59928777f.ngrok.io"

class InstructorLogin extends Component {

  state = {};

  //login to group handler
  handleLogin = e => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let pss = document.getElementById("pss").value;
    var xhr = new XMLHttpRequest();

    if (email.includes("@bilkent.edu.tr") && pss.length >= 8) {
      xhr.addEventListener("load", () => {
        // update the state of the component with the result here
        var parsed = JSON.parse(xhr.response);
        //check inputs
        if (parsed.password === pss) {
          toast.success("Logged in succesfully");
          this.setState({ loggedIn: true });
          localStorage.setItem('currentUserMail', email);
          localStorage.setItem('userLogedIn', true);

        } else {
          toast.error("Wrong password or username");
        }
      });

      // open the request with the verb and the url
      xhr.open("GET", url + "/api/instructor/login/" + email);
      // send the request
      xhr.send();

    } else {
      toast.error("Your mail adress and password is not in proper format!");
    }

  };
  render() {
    if (this.state.loggedIn) {
      return <Redirect to={'/instructorMain'} />
    }
    return (
      <div className="register_class column">
        <div className="logo_login_register">
          <img id="bg" src={bg} alt="bg" />
        </div>
        <div className="register_form_div">
          <div className="register_form">
            <form className="form">
              <h1>Instructor Login</h1>
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

              <Button id="logBtn" variant="contained" color="primary" onClick={this.handleLogin}>
                Login
              </Button>
              <ToastContainer />

              <hr />

              <Link to="/InstructorRegister">
                <Button className="regBtn" title="Learn More" variant="contained" color="primary" >
                  Register
              </Button>
              </Link>

              <div className="forgot_div">
                <hr />
                <h3> or </h3>
                <hr />
              </div>

              <Link to="/Login">
                <Button className="regBtn" title="Learn More" variant="contained" color="secondary" >
                  Student Login
              </Button>
              </Link>

              <h3 id="account_type_question"> Are you a student? </h3>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default InstructorLogin;
