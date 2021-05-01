import React, { Component } from "react";
import "../csss/questionItem.css";
import Button from "@material-ui/core/Button";

class QuestionItem extends Component {
  state = {};
  componentDidMount() {
    this.setState({ "name": this.props.question });
    this.setState({ "index": this.props.index });
  }
  handleAnswer = e =>{

    let answer = document.getElementById("answer").value;
    console.log(this.props.index);
    console.log(localStorage.getItem("selectedMember"));
    console.log(answer);

    var data = {
      "pollQuestionId": this.props.index,
      "studentEmail" : localStorage.getItem("selectedMember"),
      "answer": answer
    };
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      // update the state of the component with the result here
      if (xhr.status === 200) {
      }
    });
    // open the request with the verb and the url

    xhr.open("POST", "http://d7c59928777f.ngrok.io/api/poll/createPollAnswer");
    xhr.setRequestHeader("Content-Type", "application/json");
    // send the request
    xhr.send(json);
    //this.setState({questionAnswerEnded : true});
  };
  render() {
    return (
      <div className={this.state.name}>
          <div className="question_item_name">
            <h3 id="question_name" >{this.state.name}</h3>
          </div>
          <div className="input">
            <input
              id="answer"
              placeholder="Answer"
              autoComplete="off"
              type="text"
            />
            <Button onClick={this.handleAnswer}>
              Submit
            </Button>
          </div>
      </div>
    );
  }
}

export default QuestionItem;

