import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../csss/items.css";
import Popup from 'reactjs-popup';

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
//        console.log(pollQuestions);
        var polls = [];
        for (var current of pollQuestions) {
          if(current.id === this.state.index) {
          console.log(current.answers);
          for(var oneAnswer of current.answers) {
            console.log(oneAnswer.answer);
          }
          var j = 0;
          polls = current.answers.map(questionobj => {
            <div key={j++}>
              <h3>{questionobj.answer}</h3>
            </div>
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

