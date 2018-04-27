import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"
import MakeTakeOrViewSurvey from "./components/makeTakeOrViewSurvey"
import SurveyList from "./components/surveyList"
import NewSurvey from "./components/newSurvey"
import SignUpOrLogin from "./components/signUpOrLogin"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          SonarSurvey - make, take, or view survey results of all kinds!
        </div>

        <BrowserRouter>
          <Switch>
            <Route path="/" component={MakeTakeOrViewSurvey} />
            <Route path="/survey-list/" component={SurveyList} />
            <Route path="/new-survey/" component={NewSurvey} />
            <Route path="/login" component={SignUpOrLogin} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
