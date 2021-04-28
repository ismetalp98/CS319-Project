import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Register from "./components/register";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
          <Switch>
          <Route exact path="/">
              <Login />
            </Route>
            <Route exact  path="/register">
              <Register />
            </Route>
            <Route exact path="/mainPage">
              <MainPage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
