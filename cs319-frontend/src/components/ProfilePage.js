import React, { Component } from "react";
import "../css/profilePage.css";
import FaceIcon from "@material-ui/icons/Face";


class ProfilePage extends Component {
  state = {};

  componentWillMount() {
    //get current student
    var xhruser = new XMLHttpRequest();
    xhruser.open("GET", "http://d7c59928777f.ngrok.io/api/student/" + localStorage.getItem('selectedMember'));
    xhruser.send();
    xhruser.addEventListener("load", () => {
      var parsed = JSON.parse(xhruser.response);
      this.setState({ studentId: parsed.studentid, firstname: parsed.name, lastname: parsed.surname, email: parsed.email });

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
            <div>
              <h2>Student Id</h2>
              <br />
              <h3>{this.state.studentId} </h3>
            </div>
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

export default ProfilePage;
