import React, { Component } from "react";
import "../css/items.css";
import { Redirect } from 'react-router';

// How polls will be displayed in home page and what will happen when clicked
class PollItem extends Component {
  state = {};
  // color variance
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
  //if clicked set name and id of poll in localStorage
  set = e => {
    e.preventDefault();
    localStorage.setItem("currentPollName", this.props.name);
    localStorage.setItem("currentPollIndex", this.props.id);
    this.setState({ redirect: true });
  }
  render() {
    if (this.state.redirect) {
      if (this.props.isInstructor) {
        return <Redirect to={'/showPollAnswer'} />
      }
      else {
        return <Redirect to={'/pollAnswer'} />
      }
    }
    return (
      <div className={this.state.name} onClick={this.set}>
        <div className="poll_item_name">
          <h3 id="group_name"> {this.props.name}</h3>
        </div>

      </div>
    );
  }
}
export default PollItem;

