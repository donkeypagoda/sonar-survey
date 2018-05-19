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

  chooseQuestionType=>{
    console.log(e.target[0].value)
  }

  submitSingleQuestionAndAnswer = e =>{
    e.preventDefault()
    console.log(e.target[0].value)
    //then push into state
  }

  async addNewSurvey(newSurvey){
    const result = await fetch("http://localhost:5000/surveys",
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSurvey)
    });
    console.log(result)
    this.props.history.push('/')
  }

  submitSurvey = e => {
    e.preventDefault()
    const newSurvey = {
      "title": e.target[0].value,
    }
    console.log(newSurvey)
  }

  render(){
    return(
      <div className="newSurvey">
        <form name="newQuestionForm" onSubmit={this.submitSingleQuestionAndAnswer}>
          <div>
            <p>Question Type:</p>
              <label>Multiple Choice</label>
              <input type="radio" id="multipleChoice" name="type" onChange={this.chooseQuestionType(1)}/>
              <label>True or False</label>
              <input type="radio" id="boolean" name="type" onChange={this.chooseQuestionType(2)}/>
              <label>Scale of 1 to 10</label>
              <input type="radio" id="rating" name="type" onChange={this.chooseQuestionType(3)}/>
              <label>Open Response</label>
              <input type="radio" id="essay" name="type" onChange={this.chooseQuestionType(4)}/>
          </div>
          <div className="textQuestionAndAnswerInput">
            {this.state}
            <label>Question</label>
            <input type="text" name="questionInput" />
            <label>Answer</label>
            <input type="text" name="answerInput" />
          </div>
          <div className="addQuestionButton">
            <button type="submit">Add This Question</button>
          </div>
        </form>
        <div className="container">
          <form name="newSurveyForm" onSubmit={this.submitSurvey}>
            <label>Survey Title:</label>
            <input type="text" name="surveyTitle" />
            <button type="submit">Finish Survey</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewSurvey
