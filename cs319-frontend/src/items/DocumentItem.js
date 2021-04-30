import React, {Component} from "react";
import "../csss/items.css";
import { Link } from "react-router-dom";



class DocumentItem extends Component {
  handleLogin = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="member" onClick={this.handleLogin}>
        <Link id="member_link"  to="profilePage">
          <div className="member_name">
            <h3> {this.props.name}</h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default DocumentItem