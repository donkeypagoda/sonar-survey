import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Question from "./question.js"
import AnswerList from "./answerList"

class Survey extends Component{
  constructor(){
    super()
    this.state = {
      qAndAList: [],
      takeSurvey: false
    }
  }

  async componentDidMount(){
    let survey_id = window.location.href.slice(51)
    console.log(survey_id)
    const res = await fetch(`http://localhost:5000/survey/q_and_a/${survey_id}`)
    const {qAndA} = await res.json()
    console.log({qAndA})
    this.setState({
      qAndAList: qAndA
    })
  }

  takeSurvey = () =>{
    this.setState({
      takeSurvey: true
    })
  }

  render(){
    let surveyQuestionsAndAnswers = []
    this.state.qAndAList.map( q => {
      surveyQuestionsAndAnswers.push(
        <div key={q.id}>
          <Question prompt={q.prompt} />
          <AnswerList answer_type={q.answer_type} answerArr={q.answer_array} />
        </div>
      )
    })
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
        <div className="surveyQandA">
          {this.state.takeSurvey ?
            surveyQuestionsAndAnswers
            : null
          }
        </div>
      </div>
    )
  }
}

export default Survey
