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

  // async componentDidMount(){
  //   const res = await fetch('')
  // }

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
