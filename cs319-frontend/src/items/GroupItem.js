import React, { Component } from "react";
import "../css/items.css";
import { Link } from "react-router-dom";


//single group item
class GroupItem extends Component {
  state = {};

  handleGroup = e => {
    e.preventDefault();
    localStorage.setItem('selectedGroup', this.props.name);
  };
  
  //arrange background color
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
    if ((localStorage.getItem('myGroupName') === this.props.name) && !this.props.notMyGroupObject) {
      return (<div></div>);
    }
    return (
      <div className={this.state.color} onClick={this.handleGroup}>
        <Link id="linkGroup" to="/groupPage" style={{ textDecoration: 'none' }}>
          <div className="poll_item_name" >
            <h3 id="group_name"> {this.props.name}</h3>
            <h3 id="group_name"> {this.props.project}</h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default GroupItem;
