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

  render(){

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
        Survey content:
        <Question />
        <AnswerList />
      </div>
    )
  }
}

export default Survey
