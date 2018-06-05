import React, {Component} from "react"
import SurveyResults from "./surveyResults"

class LandingPage extends Component {
  constructor(){
    super()
    this.state = {
      randomSurveyResults: null
    }
    async componentDidMount(){
      const res = await fetch("http://localhost:5000/surveys")
      const num = await res.json()
      const length = num.length
      console.log(length)
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
