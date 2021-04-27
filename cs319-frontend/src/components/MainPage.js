import React, { Component } from "react";
import Header from "./Header";
import ProfilePage from "./ProfilePage";
import Register from "./register";
import GroupPage from "./GroupPage";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import "../csss/mainPage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <Route exact path="/register">
            <Register />
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
