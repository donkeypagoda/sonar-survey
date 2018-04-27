import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"
import MakeTakeOrViewSurvey from "./components/makeTakeOrViewSurvey"
import SurveyList from "./components/surveyList"
import NewSurvey from "./components/newSurvey"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
        </div>

        <BrowserRouter>
          <Switch>
            <Route path="/" component={MakeTakeOrViewSurvey} />
            <Route path="/survey-list" component={SurveyList} />
            <Route path="/new-survey" component={NewSurvey} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
