import React, {Component} from "react"
import SurveyResults from "./surveyResults"

class LandingPage extends Component {
  constructor(){
    super()
    this.state = {
      randomSurveyResults: null
    }
  }
  render(){
    return (
      <div className="landingPage">
        <div>This will be interesting recent survey results</div>
      </div>
    )
  }
}

export default LandingPage
