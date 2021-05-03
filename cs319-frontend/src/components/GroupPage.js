import React, { Component } from "react";
import "../css/groupPage.css";
import Member from "../items/Member";
import AddIcon from "@material-ui/icons/Add";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from "@material-ui/core/Button";
import DocumentItem from "../items/DocumentItem";
import ReviewItem from "../items/ReviewItem";
import { Redirect } from "react-router-dom";
import RemoveIcon from "@material-ui/icons/Remove";

class GroupPage extends Component {
  state = { valueR: null };

  //Get all deriverables for document review
  getDeliverables = (parsedDeliverables) => {
    var j = 0;
    const deliverableNames = parsedDeliverables.map(documentitem => <div>
      <input key={j++} type="radio" value={documentitem.id} name="gender" /> {documentitem.name}
    </div>)
    this.setState({ deliverableNames: deliverableNames });
  };

  componentWillMount() {
    this.getPeriod();
    var xhrgroups = new XMLHttpRequest();
    xhrgroups.open("GET", "http://d7c59928777f.ngrok.io/api/group/getdeliverable/" + localStorage.getItem('selectedGroup'));
    xhrgroups.send();
    xhrgroups.addEventListener("load", () => {
      var parsed = JSON.parse(xhrgroups.response);
      var parsedStudents = parsed.students;
      var parsedDeliverables = parsed.deliverables;


      // get Deliverables
      this.setState({ valueR: 6 });
      const deliverables = parsedDeliverables.map(documentitem => <DocumentItem
        key={documentitem.id}
        name={documentitem.name}
        url={documentitem.url}
      />)

      this.getDeliverables(parsedDeliverables);

      // get Reviews
      var myMap = new Map();
      for (var currDeliverable of parsedDeliverables) {
        myMap.set(currDeliverable.name, currDeliverable.reviews);
      }
      var i = 0;
      var reviews = [];
      myMap.forEach(function (value, keya) {
        if (value.length !== 0) {
          const curr = <div key={keya}>
            <h2 style={{ color: '#f50057' }} id="document_review_object"> {keya}</h2>
            <hr /></div>;
          const currRevs = value.map(reviewitem =>
            <ReviewItem
              key={i++}
              name={reviewitem.student.name}
              review={reviewitem.review}
            />)

          let buffer = []
          buffer.push(curr);
          buffer.push(currRevs);
          reviews = reviews.concat(buffer);
        }
      });

      //get all Members if my group
      if (localStorage.getItem('myGroupName') === localStorage.getItem('selectedGroup')) {
        const members = parsedStudents.map(memberitem => <Member
          key={memberitem.studentid}
          name={memberitem.name}
          surname={memberitem.surname}
          email={memberitem.email}
          myfriend={true}
          isInstructor={!this.props.instructor}
        />)
        this.setState({ members: members });
      }
      //get all Members if not my group
      else {
        const members = parsedStudents.map(memberitem => <Member
          key={memberitem.studentid}
          name={memberitem.name}
          surname={memberitem.surname}
          email={memberitem.email}
          myfriend={false}
          isInstructor={!this.props.instructor}
          period = {localStorage.getItem("currentPeriod")}
        />)
        this.setState({ members: members });
      }
      //Set all the states
      this.setState({ parsedStudents: parsedStudents });
      this.setState({ deliverables: deliverables });
      this.setState({ reviews: reviews });
    });
  }

  //save the document handler
  handleSaveDocument = e => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let url = document.getElementById("url").value;
    let groupname = localStorage.getItem('selectedGroup');
    var xhr = new XMLHttpRequest();

    var data = {
      "url": url,
      "name": name,
      "groupname": groupname
    };

    var json = JSON.stringify(data);
    xhr.addEventListener("load", () => {

      if (xhr.status === 200) {
      }
    });

    xhr.open("POST", "http://d7c59928777f.ngrok.io/api/deliverable/create");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
  }


  //join group handler
  handleJoinGroup = e => {
    e.preventDefault();
    let groupname = localStorage.getItem('selectedGroup');
    let studentEmail = localStorage.getItem('currentUserMail');

    var data = {
      "groupname": groupname,
      "studentEmail": studentEmail,
    };
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {


      if (xhr.status === 200) {
        this.setState({ joinedGroup: true });
        alert("Joined to the group")
      }
    });

    xhr.open("POST", "https://d7c59928777f.ngrok.io/api/group/addStudent");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
  };

  //leave the group
  handleLeaveGroup = e => {
    e.preventDefault();
    let studentEmail = localStorage.getItem('currentUserMail');

    var data = {
      "email": studentEmail,
    };
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {


      if (xhr.status === 200) {
        this.setState({ leavedGroup: true });
        localStorage.setItem("myGroupName", "none");
        alert("Leaved the group")
      }
    });

    xhr.open("POST", "http://d7c59928777f.ngrok.io/api/student/leaveGroup");
    xhr.setRequestHeader("Content-Type", "application/json");
    // send the request
    xhr.send(json);
  }

  //save review handler
  handleSaveReview = e => {
    e.preventDefault();

    let review = document.getElementById("review").value;
    let email = localStorage.getItem('currentUserMail');
    let doc = this.state.valueR

    var data = {
      "studentEmail": email,
      "deliverableId": doc,
      "review": review
    };

    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://d7c59928777f.ngrok.io/api/deliverable/addReview");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);

    xhr.addEventListener("load", () => {
    });
  }
  getPeriod = e => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://d7c59928777f.ngrok.io/api/instructor/evaluationPeriod");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        var parsed = JSON.parse(xhr.response);
        localStorage.setItem("currentPeriod", parsed.active)
      }
    });
  };
  //  radio button handler
  handleChange = (event) => {
    this.setState({ valueR: event.target.value });
  };

  render() {
    //if group leaved or joined to it redirect
    if (this.state.joinedGroup || this.state.leavedGroup) {
      return <Redirect to={'/homePage'} />
    }
    return (
      <div className="group_page">
        <div className="group_page_div">
          <div className="members_div">
            <h1> {localStorage.getItem('selectedGroup')} </h1>
            <hr />
            <div className="members">
              {this.state.members}
            </div>
          </div>
          <div className="documents_div" >
            <h1> Documents </h1>
            <hr />
            <div className="documents">
              {this.state.deliverables}
            </div>
          </div>
          <div className="reviews_div" >
            <h1> Reviews </h1>
            <hr />
            <div className="reviews">
              {this.state.reviews}
            </div>
          </div>
        </div>
        {this.props.instructor ? null :
          <div className="group_buttons_div">
            <div className="group_buttons_inner_div">
              {localStorage.getItem('myGroupName') === localStorage.getItem('selectedGroup') ?
                <div >
                  <Popup
                    trigger={<div id="group_button">
                      <AddIcon id="add_icon" />
                      <span>Add Document</span>
                    </div>}
                    modal
                    nested
                  >
                    {close => (
                      <div className="modal">
                        <button className="close" onClick={close}>
                          &times;
            </button>
                        <div className="header"> Add Document </div>
                        <div className="content">
                          your Document URL

            </div>
                        <div className="actions">
                          <div className="search_form_div">
                            <div className="input">
                              <input
                                id="name"
                                placeholder="Name"
                                autoComplete="off"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="search_form_div">
                            <div className="input">
                              <input
                                id="url"
                                placeholder="URL"
                                autoComplete="off"
                                type="text"
                              />
                            </div>
                          </div>

                          <Button
                            id="button_save"
                            onClick={this.handleSaveDocument}
                            variant="contained" color="primary"
                          >
                            Save document
          </Button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div> : null}


              {localStorage.getItem('myGroupName') === localStorage.getItem('selectedGroup') ?
                null
                : <Popup
                  trigger={<div id="group_button"><AddIcon id="add_icon" />
                    <span>Add Review</span></div>}
                  modal
                  nested
                >
                  {close => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
  </button>
                      <div className="header"> Review </div>
                      <div className="content">
                        <div onClick={this.handleChange}>
                          {this.state.deliverableNames}
                        </div>
                      </div>
                      <div className="actions">

                        <div className="input">
                          <textarea
                            id="review"
                            placeholder="Review"
                            autoComplete="off"
                            type="text"
                          />
                        </div>

                        <Button
                          id="button_save"
                          onClick={this.handleSaveReview}
                          variant="contained" color="primary"
                        >
                          Save Review
    </Button>
                      </div>
                    </div>
                  )}
                </Popup>}
              {localStorage.getItem('myGroupName') !== "none" ?
                null
                : <div id="group_button" onClick={this.handleJoinGroup}>
                  <AddIcon id="add_icon" />
                  <span>Join the Group</span>
                </div>
              }
              {localStorage.getItem('myGroupName') === localStorage.getItem('selectedGroup') ?
                <div id="group_button" onClick={this.handleLeaveGroup}>
                  <RemoveIcon id="remove_icon" />
                  <span>Leave the Group</span>
                </div>
                : null
              }
            </div>
          </div>
        }
      </div>

    );
  }
}
export default GroupPage;

