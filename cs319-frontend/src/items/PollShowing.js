import React, { Component } from "react";
import "../csss/items.css";

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

