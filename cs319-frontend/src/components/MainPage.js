import React from 'react';
import Header from "./Header";
import ProfilePage from "./ProfilePage";
import Login from "./Login";
import GroupPage from "./GroupPage";
import HomePage from "./HomePage";
import "../csss/mainPage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function MainPage() {
    return (
      <Router>
        <div className="main_page">
          <Header />
          <Switch>
            <Route exact path="/">
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
            <Route exact path="/homePage">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }