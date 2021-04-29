import React, { Component } from "react";
import "../csss/items.css";
import { Link } from "react-router-dom";

class PollItem extends Component {
  state = {};
  componentWillMount() {
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
        <Link id="linkGroup" to="/register">
          <div className="poll_item_name">
            <h3 id="group_name"> {this.props.name}</h3>
          </div>
          <h3 id="votecount"> {this.props.count}</h3>
        </Link>
      </div>
    );
  }
}

export default PollItem;

