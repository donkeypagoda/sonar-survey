import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"
import "./App.css"
import LandingPage from "./components/landingPage"
import SurveyList from "./components/surveyList"
import NewSurvey from "./components/newSurvey"
import CreateAccount from "./components/createAccount"
import NavBar from "./components/navBar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={LandingPage} />
              <Route path="/survey-list" component={SurveyList} />
              <Route path="/new-survey" component={NewSurvey} />
              <Route path="/create-account" component={CreateAccount} />
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
