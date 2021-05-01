import React, { Component } from "react";
import "../csss/PollAnswer.css";
import { Redirect } from "react-router-dom";




class PollAnswer extends Component {
  state = {};
  
  getQuestions = e => {
    var pollIndex = localStorage.getItem("currentPollIndex");
    var pollName = localStorage.getItem("currentPollName");
    console.log("POLL INDEX ALOO " + pollIndex);
    console.log("POLL NAME " + pollName);
    var xhrquestions = new XMLHttpRequest();
    xhrquestions.addEventListener("load", () => {
        var parsed = JSON.parse(xhrquestions.response);
        console.log("pollanswer 3" + parsed);
        if (xhrquestions.status === 200) {

        }
      });
      xhrquestions.open("GET", "https://d7c59928777f.ngrok.io/api/poll/" + pollIndex);
      xhrquestions.send();
    //this.setState({questionAnswerEnded : true});
  };
  componentDidMount() {
    this.getQuestions();
}
  render() {
    if (this.state.questionAnswerEnded) {
      return <Redirect to={'/homePage'} />;
    }
    return (
      <form className="PollCreateV2">
          <div className="poll_list_div">

    <h2>questions</h2>
    <hr />
    {this.state.questions}
    </div>

      </form>
    );
  }
}

export default PollAnswer;
