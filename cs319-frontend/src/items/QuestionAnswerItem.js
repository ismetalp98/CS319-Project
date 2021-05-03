import React, { Component } from "react";
import "../css/items.css";
import Popup from 'reactjs-popup';
import PollShowAnswer from "./PollShowAnswer";

// How a single question of poll will be displayed and what will happen if clicked
class QuestionAnswerItem extends Component {
  state = {};
  componentDidMount() {
    this.setState({ "name": this.props.question });
    this.setState({ "index": this.props.index });
    this.setState({ "pollIndex": this.props.pollIndex });
  }

  //get all the answers
  getAnswers = e => {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    var pollQuestions;
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        var parsed = JSON.parse(xhr.response);
        pollQuestions = parsed.questions;
        // map all questions in poll as poll show answer object which indicates how their answer will be displayed
        for (var current of pollQuestions) {
          if (current.id === this.state.index) {
            const polls = current.answers.map(questionobj => {
              return <PollShowAnswer
                answer={questionobj.answer}>
              </PollShowAnswer>
            })
            this.setState({ polls: polls });
          }
        }
      }
    });
    xhr.open("GET", "http://d7c59928777f.ngrok.io/api/poll/" + this.state.pollIndex);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
  }

  render() {
    return (
      <div>
        <Popup
          trigger={<div className="poll_item1">
            <div className="poll_item_name" onClick={this.getAnswers}>
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

