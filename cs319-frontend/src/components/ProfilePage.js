import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../csss/profilePage.css";
import FaceIcon from "@material-ui/icons/Face";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: "21703786",
      firstname: "İsmet Alp",
      lastname: "Eren",
      email: "alp.eren@ug.bilkent.edu.tr"
    };
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
          <Button id="editprofilebtn" variant="contained" color="primary">
            Edit Profile
          </Button>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
