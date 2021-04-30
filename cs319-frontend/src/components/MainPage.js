import React, {Component} from 'react';
import Header from "./Header";
import ProfilePage from "./ProfilePage";
import Login from "./Login";
import GroupPage from "./GroupPage";
import HomePage from "./HomePage";
import "../csss/mainPage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class MainPage extends Component {
  state = {};
  componentWillMount() {
    
    var xhruser = new XMLHttpRequest();
    xhruser.open("GET", "http://d7c59928777f.ngrok.io/api/student/" + localStorage.getItem('currentUserMail'));

    xhruser.send();
    xhruser.addEventListener("load", () => {
      var parsed = JSON.parse(xhruser.response);
      if (parsed.group === null) {
        this.setState({hasNoGroup : true})
       }
      else {
        this.setState({hasNoGroup : false})
      }
      
    });
  }
  render() {
    return (
      <Router>
        <div className="main_page">
          <Header hasNoGroup={this.state.hasNoGroup}/>
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
}
export default MainPage;