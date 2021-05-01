import React, { Component } from "react";
import "../csss/groupPage.css";
import Member from "../items/Member";
import AddIcon from "@material-ui/icons/Add";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from "@material-ui/core/Button";
import DocumentItem from "../items/DocumentItem";
import ReviewItem from "../items/ReviewItem";
import { Redirect } from "react-router-dom";


class GroupPage extends Component {
  state = {};
  componentWillMount() {
    var xhrgroups = new XMLHttpRequest();
    xhrgroups.open("GET", "http://d7c59928777f.ngrok.io/api/group/getdeliverable/" + localStorage.getItem('selectedGroup'));
    xhrgroups.send();
    xhrgroups.addEventListener("load", () => {
      // update the state of the component with the result here
      var parsed = JSON.parse(xhrgroups.response);
      var parsedStudents = parsed.students;
      var parsedDeliverables = parsed.deliverables;
      console.log( parsedDeliverables)
      const members = parsedStudents.map(memberitem => <Member
        key={memberitem.studentid}
        name={memberitem.name}
        surname={memberitem.surname}
        email={memberitem.email}
      />)
      console.log(parsedDeliverables);


        //Reviews
      var reviewList = Array();
      var a;
      for (a in parsedDeliverables){
        reviewList = reviewList.concat(parsedDeliverables[a].reviews);
      }
      
      console.log(reviewList);
      var i = 0;
      const deliverables = parsedDeliverables.map(documentitem => <DocumentItem
        key={i++}
        name={documentitem.name}
        url={documentitem.url}
      />)


      i = 0;
      const reviews = reviewList.map(reviewitem => <ReviewItem
        key={i++}
        name={reviewitem.student.name}
        review={reviewitem.review}
      />)



      const membersNames = parsedStudents.map(memberitem => <div><li key={memberitem.studentid}> {memberitem.name} {memberitem.surname}</li>
        <div className="input">
          <textarea
            id="url"
            placeholder="Review"
            autoComplete="off"
            type="text"
          />
        </div>
      </div>)
      this.setState({ membersNames: membersNames });
      this.setState({ members: members });
      this.setState({ deliverables: deliverables });
      this.setState({ reviews: reviews });
    });
  }

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
        console.log(data)
      }
    });

    xhr.open("POST", "http://d7c59928777f.ngrok.io/api/deliverable/create");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
  }

  handleSaveReview = e => {
    e.preventDefault();
    let review = document.getElementById("review").value;

    console.log( review);
  }
  
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
      var parsed = JSON.parse(xhr.response);

      if (xhr.status == 200) {
        console.log(xhr.status);
        console.log("Successfully Joined");
        this.setState({ joinedGroup: true });
        alert("Joined to the group")
      }
    });

    xhr.open("POST", "https://d7c59928777f.ngrok.io/api/group/addStudent");
    xhr.setRequestHeader("Content-Type", "application/json");
    // send the request
    xhr.send(json);
  };

  handleSavePeerReview = e => {
      
  }

  render() {
    if (this.state.joinedGroup) {
      return <Redirect to={'/groupPage'} />
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
                        {' '}
          Give your Document URL

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
              <Popup
                trigger={<div id="group_button"><AddIcon id="add_icon" />
                  <span>Add Peer Review</span></div>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
  </button>
                    <div className="header">Peer Review </div>
                    <div className="content">
                      <ul id="peerReviewMembers">
                        {this.state.membersNames}
                      </ul>
                    </div>
                    <div className="actions">

                      <Button
                        id="button_save"
                        onClick={this.handleSavePeerReview}
                        variant="contained" color="primary"
                      >
                        Save Peer Review
    </Button>
                    </div>
                  </div>
                )}
              </Popup>
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
          </div>
        </div>
      </div>
    );
  }
}

export default GroupPage;

