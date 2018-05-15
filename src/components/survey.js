import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Question from "./question.js"
import AnswerList from "./answerList"

class Survey extends Component{
  constructor(){
    super()
    this.state = {
      questionList: [],
      answerList: []
    }
  }

  render(){

    return(
      <div className="question">
        Survey content:
        <Question />
        <AnswerList />
      </div>
    )
  }
}

export default Survey
