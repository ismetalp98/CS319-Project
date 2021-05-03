import React, { Component } from "react";
import "../css/items.css";

// how answer of a poll will be displayed
class PollShowAnswer extends Component {
  state = {};
  componentDidMount() {
    this.setState({ "name": this.props.answer });
  }
  render() {
    return (
      <div>
        {this.state.name}
        <hr></hr>
      </div>
    );
  }
}
export default PollShowAnswer;

