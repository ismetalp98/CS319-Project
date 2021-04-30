import React, { Component } from "react";
import "../csss/groupPage.css";
import Member from "../items/Member";
import AddIcon from "@material-ui/icons/Add";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from "@material-ui/core/Button";
import DocumentItem from "../items/DocumentItem";


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
      this.setState({ membersjson: parsedStudents });
      console.log(parsedStudents);
      const members = parsedStudents.map(memberitem => <Member
        key={memberitem.studentid}
        name={memberitem.name}
        surname={memberitem.surname}
        email={memberitem.email}
      />)
      /*const membersNames = parsedStudents.map(memberitem => <div><li key={memberitem.studentid}> {memberitem.name} {memberitem.surname}</li>
        <div className="search_form_div">
          <div className="input">
            <textarea
              id="url"
              placeholder="Review"
              autoComplete="off"
              type="text"
            />
          </div>
        </div></div>)
        this.setState({ membersNames: membersNames });*/
      this.setState({ members: members });
      
    });
  }

  handleClose = e => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let url = document.getElementById("url").value;
    var xhr = new XMLHttpRequest();
    /*xhr.open("GET", url +"/api/student/login/" + email);
    xhr.send();
    
    xhr.addEventListener("load", () => {
      
    });*/
  }

  render() {
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
              <DocumentItem name="asd" url="https://github.com/ismetalp98/CS319-Project-PeerReview" />
              <DocumentItem name="asd" />
              <DocumentItem name="asd" />
              <DocumentItem name="asd" />
            </div>
          </div>
          <div className="reviews_div" >
            <h1> Reviews </h1>
            <hr />
            <div className="reviews">
              {this.state.members}
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
                          onClick={this.handleClose}
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
                  <div className="header"> Peer Review </div>
                  <div className="content">


                  </div>
                  <div className="actions">
                
                          <div className="input">
                            <textarea
                              id="name"
                              placeholder="Review"
                              autoComplete="off"
                              type="text"
                            />
                          </div>
                    
                    <Button
                      id="button_save"
                      onClick={this.handleClose}
                      variant="contained" color="primary"
                    >
                      Save Review
    </Button>
                  </div>
                </div>
              )}
            </Popup>}
          </div>

        </div>
      </div>
    );
  }
}

export default GroupPage;

