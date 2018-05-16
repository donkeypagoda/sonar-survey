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

  submitSurvey = e =>{
    e.preventDefault()
    console.log(e.target[0].value)
  }

  render(){
    return(
      <div className="newSurvey">
        <div className="container">
        NEW SURVEY
          <form name="newSurveyForm">

          </form>
        </div>
      </div>
    )
  }
}

export default NewSurvey
