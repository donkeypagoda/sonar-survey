import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Question from "./question.js"
import AnswerList from "./answerList"

class Survey extends Component{
  constructor(){
    super()
    this.state = {
      qAndAList: [],
      takeSurvey: false,
      surveyUrl: null,
      ansArr: [],
      ansGetters: []
    }
  }

  submissionBuilder = (list) => {
    const ansArr = []
    list.map(a => {
      let sub = {
        "survey_id": a.survey_id,
        "question_id": a.question_id,
        "user_id": null, // to be built later with user functionality
        "response_string": ""
      }
      ansArr.push(sub)
    })
    return ansArr
  }

  getterBuilder = (list) => {
    const getArr = []
    let getterCount = 0
    list.map(g => {
      let getter = {
        "target_inc": 0,
        "target_type": ""
      }
      if (g.answer_type === "boolean"){

        getterCount += 2
      }
      else if (g.answer_type === "multiple_choice"){

      }
      else if (g.answer_type === "range"){

      }
      else {

      }
    })
    return getArr
  }

  async componentDidMount(){
    let survey_id = window.location.href.slice(window.location.href.lastIndexOf("/") + 1)
    console.log(survey_id)
    const res = await fetch(`http://localhost:5000/survey/q_and_a/${survey_id}`)
    const {qAndA} = await res.json()
    console.log({qAndA})
    this.setState({
      qAndAList: qAndA,
      surveyUrl: qAndA[0].url,
      ansArr: this.submissionBuilder(qAndA),
      ansGetters: this.getterBuilder(qAndA)
    })

  }

  async submitCompletedSurvey(newResponse){
    console.log(newResponse)
    console.log(this.state.surveyUrl)
    // const res = await fetch("http://localhost:5000/results",
    //   {
    //     method: "POST",
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(newResponse)
    //   })
    // console.log(res)
    this.props.history.push(`${this.state.surveyUrl}`)
  }

  takeSurvey = () =>{
    this.setState({
      takeSurvey: true
    })
  }

  answerGetter = (target) => {

  }

  submitSurveyAnswers = e => {
    e.preventDefault()
    console.log(e.target[0].checked)
    console.log(e.target[1].checked)
    console.log(e.target[2].value)
    console.log(e.target[11].value)
    console.log(e.target)
    // this.submissionBuilder(e.target)
    // this.submitCompletedSurvey(newResponse)
  }

  render(){
    let surveyQuestionsAndAnswers = []
    this.state.qAndAList.map( q => {
      surveyQuestionsAndAnswers.push(
        <div key={q.id}>
          <Question prompt={q.prompt} />
          <AnswerList answer_type={q.answer_type} answer_array={q.answer_array} id={q.id} />
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
            <form className="takingSurvey" onSubmit={this.submitSurveyAnswers}>
              {surveyQuestionsAndAnswers}
              <button type="submit">Submit Completed Survey</button>
            </form>
            : null
          }
        </div>
      </div>
    )
  }
}

export default Survey
