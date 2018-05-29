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
      // ansArr: []
      // ansGetters: []
    }
  }

  submissionBuilder = (qArr, aArr) => {
    const ansArr = []
    qArr.map((a, index) => {
      let sub = {
        "survey_id": a.survey_id,
        "question_id": a.question_id,
        "user_id": null, // to be built later with user functionality
        "response_string": aArr[index]
      }
      ansArr.push(sub)
    })
    return ansArr
  }

  async componentDidMount(){
    let survey_id = window.location.href.slice(window.location.href.lastIndexOf("/") + 1)
    const res = await fetch(`http://localhost:5000/survey/q_and_a/${survey_id}`)
    const {qAndA} = await res.json()
    console.log(qAndA)
    this.setState({
      qAndAList: qAndA,
      surveyUrl: qAndA[0].url
    })

  }

  async submitCompletedSurvey(newResponse){
    const res = await fetch("http://localhost:5000/results",
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newResponse)
      })

    this.props.history.push(`${this.state.surveyUrl}`)
  }

  takeSurvey = () =>{
    this.setState({
      takeSurvey: true
    })
  }

  answerGetter = (form) => {
    const ans = [... form]
    const ansArr = []
    ans.map(a => {
      if (a.getAttribute("get") === "multiple_choice" && a.checked) ansArr.push(a.id)
      if (a.getAttribute("get") === "boolean" && a.checked) ansArr.push(a.id)
      if (a.getAttribute("get") === "range") ansArr.push(a.value)
      if (a.getAttribute("get") === "string") ansArr.push(a.value)
    })

    return ansArr
  }

  submitSurveyAnswers = e => {
    e.preventDefault()
    const ans = this.answerGetter(e.target)
    const responseArr = this.submissionBuilder(this.state.qAndAList, ans)
    responseArr.map(r =>{
      this.submitCompletedSurvey(r)
    })
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
