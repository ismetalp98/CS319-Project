import React from "react";
import "./style.css";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Register from "./components/register";
import GroupPage from "./components/GroupPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <MainPage />
    </div>
    /*<Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/mainPage">
              <MainPage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>*/
  );
}

export default App;
