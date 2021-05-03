import React, { Component } from "react";
import "../css/review.css";


//single evaluation item
class Evaluation extends Component {
    state = {};
    componentDidMount() {
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
                <h5>"{this.state.evaluation}" </h5>
                <hr></hr>
            </div>
        );
    }
}

export default Evaluation;
