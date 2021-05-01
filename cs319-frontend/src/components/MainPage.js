import React from 'react';
import Header from "./Header";
import ProfilePage from "./ProfilePage";
import Login from "./Login";
import GroupPage from "./GroupPage";
import HomePage from "./HomePage";
import "../csss/mainPage.css";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import PollQuestionCreate from "../components/PollQuestionCreate";
import PollCreateOpenEnded from "./PollCreateOpenEnded";

function MainPage() {
  return (
    <Router>
      <div className="main_page">
        <Header />
        <Switch>
          <Route exact path="/homePage">
            <HomePage />
          </Route>
          <Route exact path="/profilePage">
            <ProfilePage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/groupPage">
            <GroupPage />
          </Route>
        </Switch>
        <Route exact path="/pollQuestionCreate">
          <PollQuestionCreate />
        </Route>
        <Route exact path="/pollCreateOpenEnded">
          <PollCreateOpenEnded />
        </Route>
      </div>
    </Router>
  );
}

export default withRouter(MainPage);