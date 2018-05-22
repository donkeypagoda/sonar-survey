import React from "react"

function AnswerList(props){
  let answerList = []
  if (props.answer_array){
    props.answer_array.map(a => {
      answerList.push(
        <div className="answerSelection">
          <p>Answer Choices:</p>
            <label>{a}</label>
            <input type="radio" id={a} />
        </div>
      )
    })
  }
  return(
    <div className="answerList">
      {props.answer_array ? props.answer_array : null}
    </div>
  )
}

export default AnswerList
