import React, { Component } from "react";
import "../csss/header.css";
import { Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";




let button = (
  <Button variant="contained" color="primary" startIcon={<PersonIcon />}>
    Profile
  </Button>
);




class Header extends Component {

  state = {};

  handleLogout = e => {
    e.preventDefault();
    this.setState({ loggedOut: true });
  };

  handleMain = e => {
    localStorage.setItem("selectedMember", localStorage.getItem('currentUserMail'))
    console.log(localStorage.getItem('selectedMember'))
  };

  render() {
    if (this.state.loggedOut) {
      localStorage.setItem('userLogedIn', false);
      localStorage.setItem('currentUserMail', "");
      return <Redirect to={'/login'} />
    }
    return (
      <header className="nav">
        <ul className="nav_buttons_ul">
          <li className="nav_button">
            <Link to="/homePage">
              <Button id="btn1" variant="contained" color="secondary" onClick={this.handleMain}>
                Secondary
            </Button>
            </Link>

          </li>
          <li className="nav_button">
            <Link to="/profilePage">{button}</Link>
          </li>
        </ul>

        <h1 id="title">
          <Link to={{ pathname: "/groupPage", state: { name: "name" } }}>
            Pire
        </Link>
        </h1>
        <li id="logoutbtn">
          <Button variant="contained" startIcon={<ExitToAppIcon />} onClick={this.handleLogout}>
            Log Out
            </Button>

        </li>
      </header>
    );
  }
}

export default Header;
