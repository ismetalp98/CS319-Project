import React, { Component } from "react";
import "../csss/items.css";
import { Link } from "react-router-dom";

/*function asd() {
  console.log("asd");
}*/


class GroupItem extends Component {
  state={};

  handleLogin = e => {
    e.preventDefault();
    console.log(this.props.name)
    localStorage.setItem('selectedGroup', this.props.name);
  };


  componentDidMount() {
    const name =
      this.props.color % 4 === 0
        ? "poll_item"
        : this.props.color % 4 === 1
          ? "poll_item1"
          : this.props.color % 4 === 2
            ? "poll_item2"
            : "poll_item1";
    this.setState({ "color": name });
  }

  render() {
    return (
      <div className={this.state.color} onClick={this.handleLogin}>
        <Link id="linkGroup" to="/groupPage" >
          <div className="poll_item_name" >
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
