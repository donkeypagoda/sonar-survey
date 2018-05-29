import React, {Component} from "react"
import {Link} from 'react-router-dom'

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

    this.setState({
      surveyList: surveys
    })
  }

  render(){
    let pageList = []
    let SURVEY_ROUTE = '/survey/:survey_url/:id'
    this.state.surveyList.map(survey => {
      pageList.push(
        <Link key={survey.id} to={SURVEY_ROUTE.replace(":survey_url", survey.url).replace(":id", survey.id)}>
          <div>{survey.title}</div>
        </Link>
      )
    })
    return(
      <div>
        {pageList}
      </div>
    )
  }
}

export default SurveyList
