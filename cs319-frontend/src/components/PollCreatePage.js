import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../csss/PollCreatePage.css";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import OptionList from "./PollOption";

class PollCreatePage extends Component {
  state = {
    OptionDetails: [
      {
        index: Math.random(),
        option: ""
      }
    ]
  };
  addOption = e => {
    this.setState(prevState => ({
      OptionDetails: [
        ...prevState.OptionDetails,
        {
          index: Math.random,
          option: ""
        }
      ]
    }));
  };

  deleteOption(record) {
    this.setState({
      OptionDetails: this.state.OptionDetails.filter(r => r !== record)
    });
  }
  render() {
    let { OptionDetails } = this.state;
    return (
      <form className="PollForm">
        <div className="PollCreation">
          <div className="PirePollHeader">
            <h2>Pire Poll</h2>
            <Button id="addOptionBtn" onClick={() => this.addOption()}>
              <AddIcon />
            </Button>
          </div>
          <div className="PollGeneral">
            <label htmlFor="question" />
            <div className="search_form_div">
              <div className="input">
                <input
                  id="option"
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
            <hr />
            <div>
              <div className="row">
                <div>
                  <OptionList
                    add={this.addOption}
                    delete={this.deleteOption.bind(this)}
                    OptionDetails={OptionDetails}
                  />
                </div>
              </div>
            </div>
          </div>
          <Button id="submitBtn" color="#841584">
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default PollCreatePage;
