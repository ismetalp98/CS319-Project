import React, { Component } from "react";
import "../css/PollQuestionAnswer.css";
import Button from "@material-ui/core/Button";


//single poll question group
class PollQuestionAnswer extends Component {
  state = {};
  componentDidMount() {
    this.setState({ "name": this.props.question });
    this.setState({ "index": this.props.index });
  }

  //submit answer button handler
  handleAnswer = e => {
    let answer = document.getElementById(this.props.index).value;

    var data = {
      "pollQuestionId": this.props.index,
      "studentEmail": localStorage.getItem("selectedMember"),
      "answer": answer
    };
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
      }
    });
    xhr.open("POST", "http://d7c59928777f.ngrok.io/api/poll/createPollAnswer");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
  };

  render() {
    return (
      <div className="question_answer_div">
        <div className="question_item_name">
          <h3 id="question_name" >{this.state.name}</h3>
        </div>
        <div className="question_form_div">
          <div className="input">
            <input
              id={this.props.index}
              placeholder="Answer"
              autoComplete="off"
              type="text"
            />
          </div>
        </div>
        <Button id="asnwer_submit_btn" onClick={this.handleAnswer} variant="contained" color="primary">
          Submit
        </Button>
      </div>
    );
  }
}

export default PollQuestionAnswer;

