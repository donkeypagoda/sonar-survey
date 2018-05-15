import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
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
            <NavBar />
              <Switch>
                <Route path="/survey-list" component={SurveyList} />
                <Route path="/new-survey" component={NewSurvey} />
                <Route path='/create-account' component={CreateAccount} />
                {/* make sure to have the intial route on the bottom here, otherwise this will fail */}
                <Route path='/' component={LandingPage} />
              </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
