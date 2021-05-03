import React, { Component } from "react";
import "../css/profilePage.css";
import FaceIcon from "@material-ui/icons/Face";


class InstructorProfile extends Component {
  state = {};

  componentWillMount() {
    var xhruser = new XMLHttpRequest();
    xhruser.open("GET", "http://d7c59928777f.ngrok.io/api/instructor/" + localStorage.getItem('selectedMember'));
    xhruser.send();
    xhruser.addEventListener("load", () => {
      var parsed = JSON.parse(xhruser.response);
      this.setState({ firstname: parsed.name, lastname: parsed.surname, email: parsed.email });
    });
  }

  render() {
    return (
      <div className="profile_page">
        <div className="profile_div">
          <div id="pp">
            <FaceIcon id="bgpp" />
          </div>
          <div className="profile_texts">
            <hr />
            <div>
              <h2>First Name </h2>
              <br />
              <h3>{this.state.firstname} </h3>
            </div>
            <hr />
            <div>
              <h2>Last Name</h2> <br />
              <h3>{this.state.lastname} </h3>
            </div>
            <hr />
            <div>
              <h2>Email</h2> <br />
              <h3>{this.state.email} </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InstructorProfile;
