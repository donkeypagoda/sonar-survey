import React, {Component} from "react"
import {Link} from "react-router-dom"

class LandingPage extends Component {

  render(){
    return (
      <div className="landingPage">
      <div className="navBar">
        <div className="titleBanner">SonarSurvey - make, take, or view survey results of all kinds!</div>
        <div className="surveyListLink">
          <Link to="/survey-list">Click here to take a survey or view results</Link>
        </div>
        <div className="surveyListLink">
          <Link to="/create-account">Click here to create an account</Link>
        </div>
      </div>
        <div>Would you like to Make, Take or View the results of a Survey?</div>
      </div>
    )
  }
}

export default LandingPage
