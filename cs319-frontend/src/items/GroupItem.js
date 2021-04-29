import React, { Component } from "react";
import "../csss/items.css";
import { Link } from "react-router-dom";

/*function asd() {
  console.log("asd");
}*/


class GroupItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "asd",
      email: "asd",
      city: "asd",
      phone: "asd",
      name: ""
    };
  }
  componentDidMount() {
    const name =
      this.props.color % 4 === 0
        ? "poll_item"
        : this.props.color % 4 === 1
          ? "poll_item1"
          : this.props.color % 4 === 2
            ? "poll_item2"
            : "poll_item1";
    this.setState({ "name": name });
  }

  render() {

    return (
      <div className={this.state.name}>
        <Link id="linkGroup" to={{
          pathname: "/groupPage",
          state : this.state
        }}>
          <div className="poll_item_name">
            <h3 id="group_name"> {this.props.name}</h3>
            <h3 id="group_name"> {this.props.project}</h3>
          </div>
          <h3 id="memcount"> 5/5 </h3>
        </Link>
      </div>
    );
  }
}

export default GroupItem;
