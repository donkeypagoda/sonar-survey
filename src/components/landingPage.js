import React, {Component} from "react"
import SurveyResults from "./surveyResults"

class LandingPage extends Component {
  constructor(){
    super()
    this.state = {
      randomSurveyResults: null
    }
  }
  surveyPicker(total){
    return Math.floor(Math.random() * Math.floor(total))
  }
  async componentDidMount(){
    const res = await fetch("http://localhost:5000/survey")
    const num = await res.json()
    const length = num.surveys.length
    const survey_id = this.surveyPicker(length)
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
