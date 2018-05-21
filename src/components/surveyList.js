import React, {Component} from "react"
import Survey from "./survey.js"
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
    console.log({surveys})
    this.setState({
      surveyList: surveys
    })
  }

  render(){
    let pageList = []
    this.state.surveyList.map(survey => {
      pageList.push(
        <Link key={survey.id} to={"/survey/"{survey.url}}>
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
