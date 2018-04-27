import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"
import makeTakeOrViewSurvey from "./components/makeTakeOrViewSurvey"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
        </div>

        <BrowserRouter>
          <Switch>
            <Route path="/" component={makeTakeOrViewSurvey} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
