import React, { Component } from "react";
import "../css/PollAnswer.css";
import { Redirect } from "react-router-dom";
import QuestionAnswerItem from "../items/QuestionAnswerItem";

class ShowPollAnswer extends Component {
  state = {};

  //get all the questions
  getQuestions = e => {
    var pollIndex = localStorage.getItem("currentPollIndex");
    var pollQuestions;

    //database get poll
    var xhrpolls = new XMLHttpRequest();
    xhrpolls.open("GET", "http://d7c59928777f.ngrok.io/api/poll/" + pollIndex);
    xhrpolls.send();

    xhrpolls.addEventListener("load", () => {
      var parsed = JSON.parse(xhrpolls.response);
      pollQuestions = parsed.questions;
      // map every question as question answer item
      const polls = pollQuestions.map(questionobj => {
        return <QuestionAnswerItem
          key={questionobj.id}
          index={questionobj.id}
          question={questionobj.question}
          pollIndex={pollIndex}>
        </QuestionAnswerItem>
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

export default ShowPollAnswer;
