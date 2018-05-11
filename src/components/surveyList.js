import React, {Component} from "react"

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
    console.log(surveys)
    this.setState({
      surveyList: surveys
    })
  }

  render(){
    return(
      <div>
        This will be the survey list, with options to take each survey, or view the results of each survey
        {this.state.surveyList}
      </div>
    )
  }
}

export default SurveyList
