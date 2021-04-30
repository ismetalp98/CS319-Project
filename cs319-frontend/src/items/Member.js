import React, {Component} from "react";
import "../csss/items.css";
import FaceIcon from "@material-ui/icons/Face";
import { Link } from "react-router-dom";



class Member extends Component {
  handleLogin = e => {
    e.preventDefault();
    localStorage.setItem('selectedMember', this.props.email);
  };
  render() {
    return (
      <div className="member" onClick={this.handleLogin}>
        <Link  to="profilePage">
          <div className="member_image">
            <FaceIcon id="member_icon" />
          </div>
          <div className="member_name">
            <h3> {this.props.name}</h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default Member
