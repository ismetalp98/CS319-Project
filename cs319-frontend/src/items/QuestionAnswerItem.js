import React, { Component } from "react";
import "../csss/items.css";
import Popup from 'reactjs-popup';
import PollShowing from "../items/PollShowing";

class QuestionAnswerItem extends Component {
  state = {};
  componentDidMount() {
    this.setState({ "name": this.props.question });
    this.setState({ "index": this.props.index });
    this.setState({ "pollIndex": this.props.pollIndex });
    console.log(this.props.question);
    console.log(this.props.index);
    console.log(this.props.pollIndex);
  }

  set = e => {
    e.preventDefault();

    var xhr = new XMLHttpRequest();
    var pollQuestions;

    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        var parsed = JSON.parse(xhr.response);
        pollQuestions = parsed.questions;
        for (var current of pollQuestions) {
          if(current.id === this.state.index) {
          console.log(current.answers);
          const polls = current.answers.map(questionobj => {
            return <PollShowing
              answer={questionobj.answer}>
            </PollShowing>
          })
          
          this.setState({ polls: polls });
        }  
      }
    }});
    xhr.open("GET", "http://d7c59928777f.ngrok.io/api/poll/" + this.state.pollIndex);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
  }

  render() {
    return (
      <div>
      <Popup
      trigger={<div className="poll_item1">
      <div className="poll_item_name" onClick={this.set}>
      <h3 id="group_name"> {this.state.name}</h3>
      </div>
    </div>}

      modal
      nested
    >
      {close => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
</button>
          <div className="header">Answers</div>
          <div className="content">
              {this.state.polls}
          </div>
          <div className="actions">
          </div>
        </div>
      )}
    </Popup>
    </div>
    );
  }
}

export default QuestionAnswerItem;

