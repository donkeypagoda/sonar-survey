import React, {Component} from "react"

class NewSurvey extends Component{
  constructor(){
    super()
    this.state = {
      questionList: [],
      answerList: []
    }
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

  submitSurvey = e =>{
    e.preventDefault()
    console.log(e.target[0].value)
  }

  render(){
    return(
      <div className="newSurvey">
        <form name="newSurveyForm">
          <div>
            <label>Question Type</label>
            <input type="radio" id="multipleChoice" />
          </div>
          <label>Question</label>
          <input type="text" name="questionInput" />
          <label>Answer</label>
          <input type="text" name="answerInput" />
        </form>
        <div className="container">
        NEW SURVEY
        </div>
      </div>
    )
  }
}

export default NewSurvey
