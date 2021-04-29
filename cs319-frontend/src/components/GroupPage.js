import React, { Component } from "react";
import "../csss/groupPage.css";
import Member from "../items/Member";
import AddIcon from "@material-ui/icons/Add";
import SettingsIcon from "@material-ui/icons/Settings";
import { useLocation } from "react-router-dom";


class GroupPage extends Component{
  
  componentDidMount() {
    var xhrgroups = new XMLHttpRequest();
    xhrgroups.open("GET", "http://d7c59928777f.ngrok.io/api/group/getdeliverable/asd");
    xhrgroups.send();   
    xhrgroups.addEventListener("load", () => {
      // update the state of the component with the result here
      var parsed = JSON.parse(xhrgroups.response);
      //var parsedStudents = parsed.students;
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
            <Member name="Eylül Çağlar" />
            <Member name="Ali" />
            <Member name="Ali" />
            <Member name="Ali" />
            <Member name="Ali" />
            <Member name="Ali" />
            <Member name="Ali" />
            <Member name="Ali" />
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