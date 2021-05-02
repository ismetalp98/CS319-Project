import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../csss/items.css";
import Popup from 'reactjs-popup';

class PollShowing extends Component {
  state = {};
  componentDidMount() {
    this.setState({ "name": this.props.answer });
  }

  set = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
          {this.state.name}
          <hr></hr>
    </div>
    
    );
  }
}

export default PollShowing;

