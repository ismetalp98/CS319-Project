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

  componentDidMount() {
    this.setState({hasNoGroup : localStorage.getItem('hasNoGroup')});
  }

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
      return <Redirect to={'/login'} />
    }
    return (
      <header className="nav">
        <ul className="nav_buttons_ul">
          <li className="nav_button">
            <Link to="/homePage" style={{ textDecoration: 'none' }}>
              <Button id="btn1" variant="contained" color="secondary" onClick={this.handleMain}>
                Secondary
            </Button>
            </Link>

          </li>
          <li className="nav_button">
            <Link to="/profilePage" style={{ textDecoration: 'none' }}>{button}</Link>
          </li>
          {this.state.hasNoGroup ? <li className="nav_button">
          <Link to="/createGroup" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" >
              Create Group
          </Button>
          </Link>
        </li> : <li className="nav_button">
        </li> }
        </ul>
        
        <h1 id="title">

          Pire
        </h1>
        <ul className="logout_buttons_ul">
        <li >
          <Button  id="logoutbtn" variant="contained" color="secondary" startIcon={<ExitToAppIcon />} onClick={this.handleLogout}>
            Log Out
            </Button>

        </li>
        </ul>
      </header>
    );
  }
}

export default Header;
