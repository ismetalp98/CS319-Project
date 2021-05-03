import React, { Component } from "react";
import "../css/PollAnswer.css";
import { Redirect } from "react-router-dom";
import PollQuestionAnswer from "../items/PollQuestionAnswer";


class PollAnswer extends Component {
  state = {};

  //get all the questions in that poll
  getQuestions = e => {
    var pollIndex = localStorage.getItem("currentPollIndex");
    var pollQuestions;
    var xhrpolls = new XMLHttpRequest();
    xhrpolls.open("GET", "https://d7c59928777f.ngrok.io/api/poll/" + pollIndex);
    xhrpolls.send();
    xhrpolls.addEventListener("load", () => {
      // update the state of the component with the result here
      var parsed = JSON.parse(xhrpolls.response);
      pollQuestions = parsed.questions;

      const polls = pollQuestions.map(questionobj => {
        return <PollQuestionAnswer
          key={questionobj.id}
          index={questionobj.id}
          question={questionobj.question}>
        </PollQuestionAnswer>
      })
      this.setState({ polls: polls });
    });
  };
  componentDidMount() {
    this.getQuestions();
  }
  render() {
    if (this.state.questionAnswerEnded) {
      return <Redirect to={'/homePage'} />;
    }
    return (
      <form className="PollAnswer">
        <div className="poll_answers_div">
          <h1>{localStorage.getItem("currentPollName")}</h1>
          <hr />
          {this.state.polls}
        </div>
      </form>
    );
  }
}

export default PollAnswer;
