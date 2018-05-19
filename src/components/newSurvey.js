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
            <p>Question Type:</p>
              <label>Multiple Choice</label>
              <input type="radio" id="multipleChoice" />
              <label>True or False</label>
              <input type="radio" id="boolean" />
              <label>Scale of 1 to 10</label>
              <input type="radio" id="rating" />
              <label>Open Response</label>
              <input type="radio" id="essay" />
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
