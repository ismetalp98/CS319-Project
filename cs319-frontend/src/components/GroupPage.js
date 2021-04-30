import React, { Component } from "react";
import "../csss/groupPage.css";
import Member from "../items/Member";
import AddIcon from "@material-ui/icons/Add";
import SettingsIcon from "@material-ui/icons/Settings";
import { useLocation } from "react-router-dom";


class GroupPage extends Component{
  state={};
  componentDidMount() {
    var xhrgroups = new XMLHttpRequest();
    xhrgroups.open("GET", "http://d7c59928777f.ngrok.io/api/group/getdeliverable/" + localStorage.getItem('selectedGroup'));
    xhrgroups.send();   
    xhrgroups.addEventListener("load", () => {
      // update the state of the component with the result here
      var parsed = JSON.parse(xhrgroups.response);
      var parsedStudents = parsed.students;
      console.log(parsedStudents);
      const members = parsedStudents.map(memberitem => <Member
        key={memberitem.studentid}
        name={memberitem.name}
        surname={memberitem.surname}
        email={memberitem.email}
      />)
      this.setState({ members: members });
    });
  }

  render(){
  return (
    <div className="group_page">
      <div className="group_page_div">
        <div className="members_div">
          <h1> Group 1-A </h1>
          <hr />
          <div className="members">
            {this.state.members}
          </div>
        </div>
        <div className="documents_div" />
        <div className="reviews_div" />
      </div>
      <div className="group_buttons_div">
        <div className="group_buttons_inner_div">
          <div id="group_button">
            <AddIcon id="add_icon" />
            <span>Add document</span>
          </div>
          <div id="group_button">
            <AddIcon id="add_icon" />
            <span>Add review</span>
          </div>
          <div id="group_button">
            <SettingsIcon id="add_icon" />
            <span>Add document</span>
          </div>
          <div id="group_button">
            <AddIcon id="add_icon" />
            <span>Add document</span>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default GroupPage;