import React from 'react';
import Header from "./Header";
import InstructorProfile from "./InstructorProfile";
import InstructorLogin from "./InstructorLogin";
import GroupPage from "./GroupPage";
import InstructorHome from "./InstructorHome";
import "../csss/mainPage.css";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import PollQuestionCreate from "../components/PollQuestionCreate";
import PollCreateOpenEnded from "./PollCreateOpenEnded";

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
          <Route exact path="/InstructorLogin">
            <InstructorLogin />
          </Route>
          <Route exact path="/groupPage">
            <GroupPage />
          </Route>
          <Route exact path="/pollQuestionCreate">
            <PollQuestionCreate />
          </Route>
          <Route exact path="/pollCreateOpenEnded">
            <PollCreateOpenEnded />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default withRouter(InstructorMain);