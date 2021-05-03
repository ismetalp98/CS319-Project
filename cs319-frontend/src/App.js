import React, { Component } from "react";
import './App.css';
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Register from "./components/register";
import InstructorLogin from "./components/InstructorLogin";
import InstructorRegister from "./components/InstructorRegister";
import InstructorMain from "./components/InstructorMain";
import InstructorProfile from "./components/InstructorProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";



class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/InstructorLogin">
              <InstructorLogin />
            </Route>
            <Route exact path="/InstructorRegister">
              <InstructorRegister />
            </Route>
            <Route exact path="/instructorMain">
              <InstructorMain />
            </Route>
            <Route exact path="/InstructorProfile">
              <InstructorProfile />
            </Route>
            <Route exact path="/mainPage">
              <MainPage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/header">
              <Header />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
