import React from 'react';
import Header from "./Header";
import ProfilePage from "./ProfilePage";
import Login from "./Login";
import GroupPage from "./GroupPage";
import HomePage from "./HomePage";
import "../css/mainPage.css";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import PollQuestionCreate from "../components/PollQuestionCreate";
import PollCreateOpenEnded from "./PollCreateOpenEnded";
import PollAnswer from './PollAnswer';

function MainPage() {
  return (
    <Router>
      <div className="main_page">
        <Header instructor={false} />
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
            <GroupPage instructor={false} />
          </Route>
          <Route exact path="/pollQuestionCreate">
            <PollQuestionCreate />
          </Route>
          <Route exact path="/pollCreateOpenEnded">
            <PollCreateOpenEnded />
          </Route>
          <Route exact path="/pollAnswer">
            <PollAnswer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default withRouter(MainPage);