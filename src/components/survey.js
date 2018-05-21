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
  

  takeSurvey(){
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
          {this.state.takeSurvey ?
            <button onClick={this.takeSurvey} /> : null
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
