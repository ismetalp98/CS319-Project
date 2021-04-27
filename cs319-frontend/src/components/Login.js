import Button from "react-bootstrap/Button";
import "../csss/auth.css";
import bg from "./../bg.svg";
import { BrowserRouter as Link } from "react-router-dom";

function login() {
  //let email = document.getElementById("email").value;
  //let pss = document.getElementById("pss").value;

  <Link to="/mainPage" />;
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

            <Link to="/mainPage">
              <Button id="logBtn" color="#841584" onClick={login}>
                Login
              </Button>
            </Link>

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
