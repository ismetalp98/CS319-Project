import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../css/PollCreateOpenEnded.css";
import { Redirect } from "react-router-dom";


class PollQuestionCreate extends Component {
  state = {};

  //add question to poll
  handlePollQuestion = e => {
    e.preventDefault();
    let index = localStorage.getItem("currentPollIndex");
    let question = document.getElementById("question").value;
    var data = {
      "pollId": index,
      "question": question
    };
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      // update the state of the component with the result here
      if (xhr.status === 200) {
        document.getElementById("question").value = "";
      }
    });
    // open the request with the verb and the url

    xhr.open("POST", "http://d7c59928777f.ngrok.io/api/poll/createPollQuestion");
    xhr.setRequestHeader("Content-Type", "application/json");
    // send the request
    xhr.send(json);
  };

  //finish button handler
  handleFinishCreation = e => {
    e.preventDefault();
    this.setState({ questionCreationEnded: true });
  }

  render() {
    if (this.state.questionCreationEnded) {
      return <Redirect to={'/InstructorHome'} />;
    }
    return (
      <form className="PollCreateOpenEnded">
        <div className="PollCreation">
          <div className="search_form_div">
            <div className="input">
              <input
                id="question"
                placeholder="Type your question here"
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e =>
                  (e.target.placeholder = "Type your question here")
                }
                autoComplete="off"
                type="text"
              />
            </div>
          </div>
          <Button id="submitBtn" variant="contained" color="primary" onClick={this.handlePollQuestion}>
            Create Question
        </Button>
          <Button id="submitBtn" variant="contained" color="primary" onClick={this.handleFinishCreation}>
            Finish Creation
        </Button>
        </div>

      </form>
    );
  }
}

export default PollQuestionCreate;
