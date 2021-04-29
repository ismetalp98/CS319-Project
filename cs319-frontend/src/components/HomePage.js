import React, { Component } from "react";
import ProfilePage from "./ProfilePage";
import PollItem from "../items/PollItem";
import GroupItem from "../items/GroupItem";
import "../csss/homePage.css";

console.log(localStorage.getItem('currentUserMail'));

class HomePage extends Component {
  componentWillMount() {
    const { history } = this.props;
    var groupid = 0;
    //tüm grupları ve pollları al
    /*const groups = json.map(groupitem => <GroupItem
      key={groupid++}
      color={groupid}
      name={groupitem.name}
      project={'PeerReview'}
      />)*/

    groupid = 0;
    /*const polls = json.map(pollitem => <PollItem
      key={pollitem.id}
    name={pollitem.name}
    color={groupid}
    count={10}
    />)*/

    //var parsed = JSON.parse(xhr.response);
    /*const polls = json.map(profilepage => <ProfilePage
      key={pollitem.id}
    name={pollitem.name}
    color={groupid}
    count={10}
    />)*/

  }
  render() {
    return (
      <div className="home_page">
        <div className="three_part_div">
          <div className="user_info_div">
            <ProfilePage />
          </div>
          <div className="group_list_div">
            <GroupItem name="Group 1-A" color={0} project="Peer Review" />
            <GroupItem name="Group 1-B" color={1} project="Peer Review" />
            <GroupItem name="Group 1-C" color={2} project="Peer Review" />
            <GroupItem name="Group 1-E" color={3} project="Peer Review" />
            <GroupItem name="Group 1-F" color={4} project="Peer Review" />
            <GroupItem name="Group 1-E" color={5} project="Peer Review" />
            <GroupItem name="Group 1-G" color={6} project="Peer Review" />
            <GroupItem name="Group 1-H" color={7} project="Peer Review" />
          </div>
          <div className="poll_list_div">
            <PollItem name="Kim en iyi" color={0} count={34} />
            <PollItem name="Bugün ne giysem" color={1} count={24} />
            <PollItem name="Çantamda ne var" color={2} count={14} />
            <PollItem name="Bir mi iki mi" color={3} count={0} />
            <PollItem name="Kerem mi Kerim mi" color={4} count={124} />
            <PollItem name="İki tane almayalım?" color={5} count={3} />
            <PollItem name="Hava soğuk mu?" color={6} count={37} />
            <PollItem name="Bulamadım" color={7} count={34} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
