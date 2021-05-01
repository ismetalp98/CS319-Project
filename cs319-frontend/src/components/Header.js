import React, { Component } from "react";
import "../csss/header.css";
import { Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Popup from 'reactjs-popup';



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

  handleCreateGroup = e => {
    e.preventDefault();
    let groupName = document.getElementById("groupName").value;

    var data = {
      "name": groupName
    };
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://d7c59928777f.ngrok.io/api/group/create/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        xhr = new XMLHttpRequest();
        xhr.open("POST", "https://d7c59928777f.ngrok.io/api/group/create/");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(json);

      }
    });


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
                Home Page
            </Button>
            </Link>

          </li>
          {localStorage.getItem('myGroupName') === "none" ?
            <li className="nav_button">
              <Popup
                trigger={<Button variant="contained" color="primary" >
                  Create Group
          </Button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
  </button>
                    <div className="header"> Create Group </div>
                    <div className="content">


                    </div>
                    <div className="actions">

                      <div className="search_form_div">
                        <div className="input">
                          <input
                            id="groupName"
                            placeholder="Group Name"
                            autoComplete="off"
                            type="text"
                          />
                        </div>
                      </div>

                      <Button
                        id="button_save"
                        onClick={this.handleCreateGroup}
                        variant="contained" color="primary"
                      >
                        Create Group
    </Button>
                    </div>
                  </div>
                )}
              </Popup>
            </li> : null}
          <li >
            <Link to="/pollCreateOpenEnded" style={{ textDecoration: 'none' }}>
              <Button id="createPollBtn" variant="contained" color="primary">
                Create Poll
            </Button>
            </Link>
          </li>
        </ul>

        <h1 id="title">

          Pire
        </h1>
        <ul className="logout_buttons_ul">
          <li >
            <Button id="logoutbtn" variant="contained" color="secondary" startIcon={<ExitToAppIcon />} onClick={this.handleLogout}>
              Log Out
            </Button>

          </li>
        </ul>
        {this.props.instructor ? <Redirect to={'/instructorHome'}/> : <Redirect to={'/homePage'}/>}
      </header>

    );
  }
}

export default Header;
