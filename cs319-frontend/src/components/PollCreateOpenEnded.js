import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../css/PollCreateOpenEnded.css";
import { Link, Redirect } from "react-router-dom";

class PollCreateOpenEnded extends Component {
  state = {};
  handlePollCreation = e => {
    e.preventDefault();
    //this is question name
    let name = document.getElementById("question").value;
    var data = {
      "name": name
    };

    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();


    var index = -1; //if not found
    xhr.addEventListener("load", () => {
      var parsed = JSON.parse(xhr.response);
      if (xhr.status === 200) {
        index = parsed.id;
        localStorage.setItem("currentPollIndex", index);
        this.setState({ pollCreated: true });
      }
    });

    xhr.open("POST", "https://d7c59928777f.ngrok.io/api/poll/createPoll");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
  };
  
  render() {
    if (this.state.pollCreated) {
      return <Redirect to={'/pollQuestionCreate'} />;
    }
    return (
      <form className="PollCreateOpenEnded">
        <div className="PollCreation">
          <div className="search_form_div">
            <div className="input">
              <input
                id="question"
                placeholder="Type your poll name here"
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e =>
                  (e.target.placeholder = "Type your question here")
                }
                autoComplete="off"
                type="text"
              />
            </div>
          </div>
          <Link to={"/PollQuestionCreate"}>
            <Button id="submitBtn" variant="contained" color="primary" onClick={this.handlePollCreation}>
              Create Poll
        </Button>
          </Link>
        </div>

      </form>
    );
  }
}

export default PollCreateOpenEnded;
