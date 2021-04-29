import React, { Component } from "react";
import './App.css';
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Register from "./components/register";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";



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
            <Route exact path="/mainPage">
              {localStorage.getItem('userLogedIn') ? <MainPage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
