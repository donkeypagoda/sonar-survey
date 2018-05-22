import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Question from "./question.js"
import AnswerList from "./answerList"

class Survey extends Component{
  constructor(){
    super()
    this.state = {
      questionList: [],
      answerList: [],
      takeSurvey: false
    }
  }

  async componentDidMount(){
    let survey_id = window.location.href.slice(51)
    console.log(survey_id)
    const res = await fetch(`http://localhost:5000/survey/q_and_a/${survey_id}`)
    const {qAndA} = await res.json()
    console.log({qAndA})
  }

  takeSurvey = () =>{
    this.setState({
      takeSurvey: true
    })
  }
  render(){
    let surveyQuestionsAndAnswers = []
    return(
      <div className="container">
        <div className="surveyResults">
          D3 results will go here
        </div>
        <div className="takeSurvey">
          {!this.state.takeSurvey ?
            <button onClick={this.takeSurvey}>Take This Survey</button> : null
          }
        </div>
        {this.state.takeSurvey ?
          {surveyQuestionsAndAnswers}
          : null
        }
      </div>
    )
  }
}

export default Survey
