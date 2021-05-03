import React from 'react';
import Header from "./Header";
import InstructorProfile from "./InstructorProfile";
import ProfilePage from "./ProfilePage";
import InstructorLogin from "./InstructorLogin";
import GroupPage from "./GroupPage";
import InstructorHome from "./InstructorHome";
import "../css/mainPage.css";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import PollQuestionCreate from "../components/PollQuestionCreate";
import PollCreateOpenEnded from "./PollCreateOpenEnded";
import ShowPollAnswer from "./ShowPollAnswer";

function InstructorMain() {
  return (
    <Router>
      <div className="main_page">
        <Header instructor={true} />
        <Switch>
          <Route exact path="/InstructorHome">
            <InstructorHome />
          </Route>
          <Route exact path="/InstructorProfile">
            <InstructorProfile />
          </Route>
          <Route exact path="/ProfilePage">
            <ProfilePage />
          </Route>
          <Route exact path="/InstructorLogin">
            <InstructorLogin />
          </Route>
          <Route exact path="/groupPage">
            <GroupPage instructor={true} />
          </Route>
          <Route exact path="/pollQuestionCreate">
            <PollQuestionCreate />
          </Route>
          <Route exact path="/pollCreateOpenEnded">
            <PollCreateOpenEnded />
          </Route>
          <Route exact path="/showPollAnswer">
            <ShowPollAnswer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default withRouter(InstructorMain);