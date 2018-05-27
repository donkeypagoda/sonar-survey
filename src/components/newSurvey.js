import React, {Component} from "react"

class NewSurvey extends Component{
  constructor(){
    super()
    this.state = {
      questionList: [],
      answerList: [],
      formToShow: null
    }
  }

  chooseQuestionType = num => {
    this.setState({
      formToShow: num
    })
  }

  addToQuestionAndAnswerToState = e => {
    e.preventDefault()
    const q = e.target[4].value
    let a = ""
    if (this.state.formToShow === null) return
    else if (e.target[5].value.length > 0){
      let ans = e.target[5].value
      let tempArr = ans.split(", ")
      a = tempArr
    }
    else {
      if (this.state.formToShow === 2) a = "boolean"
      else if (this.state.formToShow === 3) a = "rating"
      else {
        a = "string"
      }
    }
    let newQList = this.state.questionList
    newQList.push(q)
    let newAnsList = this.state.answerList
    newAnsList.push(a)
    this.setState({
      questionList: newQList,
      answerList: newAnsList
    })
  }

  async submitQuestionsAndAnswersFromState(id, q, a){
      let ansSubmit = null
      if (typeof a !== "string"){
        ansSubmit = Array.from(a)
      }
      else{
        ansSubmit = a
      }
      const newQuestion = {
        "survey_id": id,
        "prompt": q,
        "answer_type": a
      }
      const res = await fetch("http://localhost:5000/questions",
        {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newQuestion)
        })
      const stuff = await res.json()
      console.log(stuff[0].id)
      const newAnswer = {
        "question_id": stuff[0].id,
        "answer_array": JSON.stringify(ansSubmit)
      }
      const resA = await fetch("http://localhost:5000/answers",
        {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newAnswer)
      })
      const stuffA = await resA.json()
      console.log(stuffA)



  }

  async addNewSurvey(newSurvey){
    const result = await fetch("http://localhost:5000/survey",
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSurvey)
    });
    const deets = await result.json()
    console.log(deets.result[0].id) //survey id to be input into the answer and question submissions
    this.state.questionList.map((q, index) => {
      this.submitQuestionsAndAnswersFromState(deets.result[0].id, q, this.state.answerList[index])
    })
    this.props.history.push('/')
  }

  submitSurvey = e => {
    e.preventDefault()
    const newSurvey = {
      "title": e.target[0].value,
      "url": e.target[0].value,
      "user_id": null
    }
    this.addNewSurvey(newSurvey)
  }

  render(){
    let qAndAs = []
    this.state.answerList.map((a, index) => {
      let ansArr = []
      if (typeof a !== "string"){
        for (let i = 0; i < a.length; i++){
          ansArr.push(
            <div key={i}>{a[i]}</div>
          )
        }
      }
      else{
        ansArr.push(
          <div key={-1}>{a}</div>
        )
      }
      qAndAs.push(
        <div key={index} className="tempQuestion">
          <div>{this.state.questionList[index]}</div>
          <div>{ansArr}</div>
        </div>
      )
    })
    return(
      <div className="newSurvey">
        <div className="container">
          <form name="newSurveyForm" onSubmit={this.submitSurvey}>
            <label>Survey Title:</label>
            <input type="text" name="surveyTitle" />
            <button type="submit">Finish Survey</button>
          </form>
        </div>
        <form name="newQuestionForm" onSubmit={this.addToQuestionAndAnswerToState}>
          <div className="questionSelection">
            <p>Question Type:</p>
              <label>Multiple Choice</label>
              <input type="radio" id="multipleChoice" name="type" checked={this.state.formToShow === 1} onChange = {() => this.chooseQuestionType(1)}/>
              <label>True or False</label>
              <input type="radio" id="boolean" name="type" checked={this.state.formToShow === 2} onChange = {() => this.chooseQuestionType(2)}/>
              <label>Scale of 1 to 10</label>
              <input type="radio" id="rating" name="type" checked={this.state.formToShow === 3} onChange = {() => this.chooseQuestionType(3)}/>
              <label>Open Response</label>
              <input type="radio" id="essay" name="type" checked={this.state.formToShow === 4} onChange = {() => this.chooseQuestionType(4)}/>
          </div>
          <div>
            {
              this.state.formToShow === 1 ?
                <div className="multipleChoiceQuestionAndAnswerInput">
                MULTIPLE CHOICE
                  <label>Question</label>
                    <input type="text" name="multipleChoiceQuestionInput" />
                  <label>Answers (separate answers with a comma, correct answer first, answers will be randomized)</label>
                    <input type="text" name="multipleChoiceAnswerInput" />
                </div>
              : null
            }
          </div>
          <div>
            {
              this.state.formToShow === 2 ?
                <div className="booleanQuestionAndAnswerInput">
                True or False
                  <label>Question</label>
                    <input type="text" name="booleanQuestionInput" />
                </div>
              : null
            }
          </div>
          <div>
            {
              this.state.formToShow === 3 ?
                <div className="ratingQuestionAndAnswerInput">
                RANGE OR RATING
                  <label>Question</label>
                    <input type="text" name="rangeQuestionInput" />
                </div>
              : null
            }
            <div>
              {
                this.state.formToShow === 4 ?
                  <div className="essayQuestionAndAnswerInput">
                  ESSAY
                    <label>Question</label>
                      <input type="text" name="essayQuestionInput" />
                  </div>
                : null
              }
            </div>
          </div>
          <div className="addQuestionButton">
            <button type="submit">Add This Question</button>
          </div>
        </form>
        <div className="surveyBeingBuilt">
          {qAndAs}
        </div>
      </div>
    )
  }
}

export default NewSurvey
