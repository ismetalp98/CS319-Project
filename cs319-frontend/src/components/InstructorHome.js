import React, { Component } from "react";
import PollItem from "../items/PollItem";
import GroupItem from "../items/GroupItem";
import Member from "../items/Member";
import "../css/homePage.css";
import { withRouter } from "react-router-dom";

class InstructorHome extends Component {
  state = {};

  //get all the groups
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

  //get all the students
  getStudentList = e => {
    var studentid = 0;
    localStorage.setItem("selectedMember", localStorage.getItem('currentUserMail'));
    var xhrstudents = new XMLHttpRequest();
    xhrstudents.open("GET", "http://d7c59928777f.ngrok.io/api/student/getAllList");
    xhrstudents.send();
    xhrstudents.addEventListener("load", () => {
      // update the state of the component with the result here
      var parsed = JSON.parse(xhrstudents.response);
      const studentList = parsed.map(memberitem => <Member
        key={studentid++}
        name={memberitem.name}
        surname={memberitem.surname}
        email={memberitem.email}
        group={memberitem.group}
      />)
      this.setState({ studentList: studentList });
    });
  };

  //get all the polls
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
        id={pollitem.id}
        name={pollitem.name}
        color={pollid++}
        count={10}
        isInstructor={true}
      />)
      this.setState({ polls: polls });
    });
  };

  componentDidMount() {
    this.getGroups();
    this.getPolls();
    this.getStudentList();
    localStorage.setItem('myGroupName', "none"); //instructer has no group
  }

  render() {
    return (
      <div className="home_page">
        <div className="three_part_div">
          <div className="class_info_div">
            <h2>Class</h2>
            <hr />
            {this.state.studentList}
          </div>
          <div className="group_list_div">
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

export default withRouter(InstructorHome);

