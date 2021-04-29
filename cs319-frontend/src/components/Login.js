import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../csss/auth.css";
import bg from "./../bg.svg";
import { Link, Redirect } from "react-router-dom";


class Login extends Component {
  state = {};
  handleLogin = e => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let pss = document.getElementById("pss").value;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      // update the state of the component with the result here
      var parsed = JSON.parse(xhr.response);
      if (parsed.password === pss) {
        console.log("Logged in succesfully");
        this.setState({ loggedIn: true });
        localStorage.setItem('currentUserMail', email);
        localStorage.setItem('userNotLogedIn', false);   
      } else {

      }
    });

    // open the request with the verb and the url
    xhr.open("GET", "https://d7c59928777f.ngrok.io/api/student/login/" + email);
    // send the request
    xhr.send();


  };
  render() {
    const { history } = this.props;
    if (this.state.loggedIn) {
      return <Redirect to={'/mainPage'} />
    }
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

              <Button id="logBtn" color="secondary" onClick={this.handleLogin}>
                Login
              </Button>

              <hr />

              <Link to="/register">
                <Button id="regBtn" title="Learn More" color="primary" >
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
}
export default Login;
