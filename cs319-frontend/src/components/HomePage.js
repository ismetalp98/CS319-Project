import React, { Component } from "react";
import ProfilePage from "./ProfilePage";
import PollItem from "../items/PollItem";
import GroupItem from "../items/GroupItem";
import "../csss/homePage.css";

console.log(localStorage.getItem('currentUserMail'));
class HomePage extends Component {
  render() {
    const { history } = this.props;
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
