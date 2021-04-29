import React, { Component } from "react";
import "../csss/groupPage.css";
import Member from "../items/Member";
import AddIcon from "@material-ui/icons/Add";
import SettingsIcon from "@material-ui/icons/Settings";

class GroupPage extends Component{

  componentWillMount() {
    const { history } = this.props;
    
    /*const groups = json.map(memberitem => <Member
      key={member.id}
      name={memberitem.name}
      />)*/

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