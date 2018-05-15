import React, {Component} from "react"
import Survey from "./survey.js"

class SurveyList extends Component{
  constructor(){
    super()
    this.state = {
      surveyList: []
    }
  }

  async componentDidMount(){
    const result = await fetch('http://localhost:5000/survey')
    const {surveys} = await result.json()
    console.log({surveys})
    this.setState({
      surveyList: surveys
    })
  }

  render(){
    return(
      <div>
      <Survey />
        This will be the survey list, with options to take each survey, or view the results of each survey
      </div>
    )
  }
}

export default SurveyList
