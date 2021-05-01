import React from 'react';
import Header from "./Header";
import Login from "./Login";
import GroupPage from "./GroupPage";
import InstructorHome from "./InstructorHome";
import "../csss/mainPage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PollQuestionCreate from "../components/PollQuestionCreate";
import PollCreateOpenEnded from "./PollCreateOpenEnded";
import InstructorProfile from './InstructorProfile';

function InstructorMain() {
  return (
    <Router>
      <div className="main_page">
        <Header instructor={true} />
        <Switch>
          <Route exact path="/instructorHome">
            <InstructorHome />
          </Route>
          <Route exact path="/InstructorProfile">
            <InstructorProfile />
          </Route>
          <Route exact path="/login">
            <Login />
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

export default InstructorMain;