import React, { Component } from "react";
import "../css/items.css";
import FaceIcon from "@material-ui/icons/Face";
import Popup from 'reactjs-popup';
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Evaluation from "../items/Evaluation";



class Member extends Component {
  state = { valueR: null };

  //go to prfile btn handler
  handleProfile = e => {
    e.preventDefault();
    localStorage.setItem('selectedMember', this.props.email);
    this.setState({ goToProfile: true });

  };

  //get all reviews
  handleReview = e => {
    var evalObject;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://d7c59928777f.ngrok.io/api/student/getinstructorview/" + this.props.email);
    xhr.send();
    xhr.addEventListener("load", () => {
      // update the state of the component with the result here
      var parsed = JSON.parse(xhr.response);
      evalObject = parsed.otherEvaluation;

      //get all reviews for seleccted member
      const reviews = evalObject.map(reviewObj => {
        return <Evaluation
          key={reviewObj.point}
          point={reviewObj.point}
          evaluation={reviewObj.evaluation}
          name={reviewObj.evaluatorStudent.name}
          surname={reviewObj.evaluatorStudent.surname}
        >
        </Evaluation>

      })
      this.setState({ eval: reviews });
    })

  };

  //submit the review for selected member
  handleSubmit = e => {
    e.preventDefault();
    let review = document.getElementById("review").value;
    let senderemail = localStorage.getItem('currentUserMail');
    let recieveremail = this.props.email;
    let point = this.state.valueR;


    var data = {
      "evaluatorStudentEmail": senderemail,
      "evaluatedStudentEmail": recieveremail,
      "groupName": localStorage.getItem('myGroupName'),
      "evaluation": review,
      "point": point
    };

    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://d7c59928777f.ngrok.io/api/peerevaluation/create");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);

    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {

      }
    });
  }

  //radio buttons controller
  handleChange = (event) => {
    this.setState({ valueR: event.target.value });
  };

  render() {
    if (this.state.goToProfile) {
      return <Redirect to={'/profilePage'} />
    }
    return (
      <Popup
        trigger={<div className="member" ><div className="member_image">
          <FaceIcon id="member_icon" />
        </div>
          <div className="member_name">
            <h3> {this.props.name} {this.props.surname}</h3>
          </div></div>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> {this.props.name} {this.props.surname}
            </div>
            <div className="content">
              <Button
                id="member_profile_view"
                onClick={this.handleProfile}
                variant="contained" color="primary"
              >
                View Profile
    </Button>
              {this.props.isInstructor ? null :
                <Popup
                  trigger={<div className="review">
                    <div className="member_name">
                      <Button
                        id="member_profile_view"
                        onClick={this.handleReview}
                        variant="contained" color="primary"
                      >
                        View Review
            </Button>
                    </div></div>}
                  modal
                  nested
                >
                  {close => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
            </button>
                      <div className="header"> Reviews for {this.props.name} {this.props.surname}

                      </div>
                      <div className="content" >
                        {this.state.eval}
                      </div>
                    </div>
                  )}
                </Popup>
              }
            </div>
            <div className="modal_members_div">
              <div className="member_actions">


                {this.props.myfriend && localStorage.getItem("currentPeriod") === "true" ?
                  <div className="member_friend">
                    <div className="input_friend">
                      <textarea
                        id="review"
                        placeholder="Review"
                        autoComplete="off"
                        type="text"
                      />
                    </div>
                    <div className="friend_member_radio" onClick={this.handleChange}>
                      <div>
                        <input type="radio" value={0} name="gender" /> <span>0</span>
                      </div>
                      <div>
                        <input type="radio" value={1} name="gender" /> <span>1</span>
                      </div>
                      <div>
                        <input type="radio" value={2} name="gender" /> <span>2</span>
                      </div>
                      <div>
                        <input type="radio" value={3} name="gender" /> <span>3</span>
                      </div>
                      <div>
                        <input type="radio" value={4} name="gender" /> <span>4</span>
                      </div>
                      <div>
                        <input type="radio" value={5} name="gender" /> <span>5</span>
                      </div>
                    </div>
                    <Button
                      id="member_profile_view"
                      onClick={this.handleSubmit}
                      variant="contained" color="primary"
                    >
                      Submit Peer Review
    </Button>
                  </div>
                  : null}
              </div>
            </div>
          </div>
        )}

      </Popup>


    );
  }
}

export default Member;
