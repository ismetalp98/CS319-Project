import React, { Component } from "react";
import ProfilePage from "./ProfilePage";
import PollItem from "../items/PollItem";
import GroupItem from "../items/GroupItem";
import "../css/homePage.css";
import { withRouter } from "react-router-dom";



class HomePage extends Component {
  state = {};

  //get all the groups
  getGroups = e => {
    var groupid = 0;
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
        notMyGroupObject={false}
      />)
      this.setState({ groups: groups });
    });
  };

  getPeriod = e => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://d7c59928777f.ngrok.io/api/instructor/evaluationPeriod");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        var parsed = JSON.parse(xhr.response);
        localStorage.setItem("currentPeriod", parsed.active)
      }
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
        isInstructor={false}
      />)
      this.setState({ polls: polls });
    });
  };

  //get my group
  getMyGroup = e => {
    var xhruser = new XMLHttpRequest();
    xhruser.open("GET", "http://d7c59928777f.ngrok.io/api/student/" + localStorage.getItem('currentUserMail'));
    xhruser.setRequestHeader("Content-Type", "application/json");

    var groupid = 0;
    xhruser.send();
    xhruser.addEventListener("load", () => {
      var parsed = JSON.parse(xhruser.response);
      if (xhruser.status === 200) {
        if (parsed.group === null) {
          const myGroup = <h2>Has no group</h2>
          this.setState({ myGroup: myGroup });
          localStorage.setItem('myGroupName', "none");
        }
        else {
          const myGroup = <GroupItem
            key={groupid++}
            color={1}
            name={parsed.group.name}
            project={'PeerReview'}
            notMyGroupObject={true} />
          this.setState({ myGroup: myGroup });
          localStorage.setItem('myGroupName', parsed.group.name);
          localStorage.setItem('hasNoGroup', false);
        }
      }

    });
  };

  componentDidMount() {
    localStorage.setItem("selectedMember", localStorage.getItem('currentUserMail'));
    this.getGroups();
    this.getPolls();
    this.getMyGroup();
    this.getPeriod();
  }
  componentWillMount() {
    localStorage.setItem("selectedMember", localStorage.getItem('currentUserMail'));
  }
  
  render() {
    return (
      <div className="home_page">
        <div className="three_part_div">
          <div className="user_info_div">
            <h2>Profile</h2>
            <hr />
            <ProfilePage />
          </div>
          <div className="group_list_div">
            <h2>My Group</h2>
            <hr />
            {this.state.myGroup}
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

export default withRouter(HomePage);
