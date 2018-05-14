import React, {Component} from "react"
import AnswerList from "./answerList.js"

function Question({question}){
  return(
    <div className="question">
      <div className="container">
        <div className="prompt">
          {question.prompt}
        </div>
        <div className="answer">
          <AnswerList answer_array={this.answer} />

        </div>
      </div>
    </div>
  )
}

export default Question
