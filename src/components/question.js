import React from "react"
import AnswerList from "./answerList.js"

function Question({question}){
  return(
    <div className="question">
      <div className="container">
        <div className="prompt">
          Question itself will go here
        </div>
      </div>
    </div>
  )
}

export default Question
