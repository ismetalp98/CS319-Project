import React, { Component } from "react";
import "../csss/review.css";

class Evaluation extends Component {
    state = {};
    componentDidMount() {
        console.log(this.props.evaluation);
        console.log(this.props.point);
        console.log(this.props.name);
        console.log(this.props.surname);
        this.setState({ "evaluation": this.props.evaluation });
        this.setState({ "point": this.props.point });
        this.setState({ "name": this.props.name });
        this.setState({ "surname": this.props.surname });
    }

    render() {
        return (
            <div className="review_texts">
                <h4 id="review_name" >{this.state.name} {this.state.surname}</h4>
                <h5 id="review_content">Point: {this.state.point}</h5>
                <h5 id="review_content">"{this.state.evaluation}" </h5>
                <hr></hr>
            </div>

        );
    }
}

export default Evaluation;
