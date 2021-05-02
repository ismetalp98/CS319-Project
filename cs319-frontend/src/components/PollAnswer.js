import React, { Component } from "react";
import "../csss/PollAnswer.css";
import { Redirect } from "react-router-dom";
import QuestionItem from "../items/QuestionItem";




class PollAnswer extends Component {
  state = {};

  getQuestions = e => {
    var pollIndex = localStorage.getItem("currentPollIndex");
    var pollName = localStorage.getItem("currentPollName");
    var pollQuestions;
    var xhrpolls = new XMLHttpRequest();
    xhrpolls.open("GET", "https://d7c59928777f.ngrok.io/api/poll/" + pollIndex);
    xhrpolls.send();
    xhrpolls.addEventListener("load", () => {
      // update the state of the component with the result here
      var parsed = JSON.parse(xhrpolls.response);
      pollQuestions = parsed.questions;
      console.log(pollQuestions);

      const polls = pollQuestions.map(questionobj => {
        return <QuestionItem
          key={questionobj.id}
          index={questionobj.id}
          question={questionobj.question}>
        </QuestionItem>
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
          <h1>Questions</h1>
          <hr />
          {this.state.polls}
        </div>
      </form>
    );
  }
}

export default PollAnswer;
