import React, { Component } from "react";
import InstructorProfile from "./InstructorProfile";
import PollItem from "../items/PollItem";
import GroupItem from "../items/GroupItem";
import Member from "../items/Member";
import "../csss/homePage.css";


class InstructorMain extends Component {
  state = {};

  getGroups = e => {
    var groupid = 0;
    localStorage.setItem("selectedMember", localStorage.getItem('currentUserMail'));
    var xhrgroups = new XMLHttpRequest();
    xhrgroups.open("GET", "http://d7c59928777f.ngrok.io/api/group/getAll");
    xhrgroups.send();
    xhrgroups.addEventListener("load", () => {
      // update the state of the component with the result here
      var parsed = JSON.parse(xhrgroups.response);
      const groups = parsed.map(groupitem => <GroupItem
        key={groupid++}
        color={groupid}
        name={groupitem.name}
        project={'PeerReview'}
      />)
      this.setState({ groups: groups });
    });
  };
  getStudentList = e => {
    //var studentid = 0;
    localStorage.setItem("selectedMember", localStorage.getItem('currentUserMail'));
    var xhrstudents = new XMLHttpRequest();
    xhrstudents.open("GET", "http://d7c59928777f.ngrok.io/api/student/getAllList");
    xhrstudents.send();
    xhrstudents.addEventListener("load", () => {
      // update the state of the component with the result here
      var parsed = JSON.parse(xhrstudents.response);
      const studentList = parsed.map(memberitem => <Member
        key={memberitem.studentid}
        name={memberitem.name}
        surname={memberitem.surname}
        email={memberitem.email}
        /*if ( {memberitem.group.name} !== "null" ) {
          group ={memberitem.group.name}
        }*/
        group ={memberitem.group}
      />)
      this.setState({ studentList: studentList });
    });
  };
  
  getPolls = e => {
    var pollid = 0;
    var xhrpolls = new XMLHttpRequest();
    xhrpolls.open("GET", "https://d7c59928777f.ngrok.io/api/poll/getAll");
    xhrpolls.send();
    xhrpolls.addEventListener("load", () => {
      // update the state of the component with the result here
      var parsed = JSON.parse(xhrpolls.response);

      const polls = parsed.map(pollitem => <PollItem
        key={pollitem.id}
        name={pollitem.name}
        color={pollid++}
        count={10}
      />)
      this.setState({ polls: polls });
    });
  };

  componentDidMount() {
      this.getGroups();
      this.getPolls();
      this.getStudentList();
  }
  render() {
    return (
      <div className="home_page">
        <div className="three_part_div">
          <div className="user_info_div">
            <h2>Profile</h2>
            <hr />
            <InstructorProfile />
          </div>
          <div className="group_list_div">
            <h2>Class</h2>
            <hr />
             {this.state.studentList}
            <hr />
            <h2>All Groups</h2>
            <hr />
            {this.state.groups}
          </div>
          <div className="poll_list_div">
            <h2>Polls</h2>
            <hr />
            {this.state.polls}
          </div>
        </div>
      </div>
    );
  }
}

export default InstructorMain;
