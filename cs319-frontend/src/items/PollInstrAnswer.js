import React, { Component } from "react";
import "../csss/questionItem.css";
import Button from "@material-ui/core/Button";

class PollAnswer extends Component {
  state = {};
  componentDidMount() {
    this.setState({ "name": this.props.question });
    this.setState({ "index": this.props.index });
    this.setState({ "pollIndex": this.props.pollIndex });
    console.log(this.props.question);
    console.log(this.props.index);
    console.log(this.props.pollIndex);
  }

  handleAnswer = e => {


  };
  getAnswer = e => {

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
      }
    });
    xhr.open("GET", "http://d7c59928777f.ngrok.io/api/poll/" + this.state.pollIndex);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
  };
  
  render() {
    return (
      <div className={this.state.name} onClick={this.set}>
        <div className="poll_item_name">
          <h3 id="group_name"> {this.props.name}</h3>
        </div>
      </div>
    );
  }
}

export default PollAnswer;

