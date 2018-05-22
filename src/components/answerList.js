import React from "react"

function AnswerList(props){
  console.log(props.answer_array)
  let answerList = []
  if (props.answer_array != null){
    for (let i = 0; i < props.answer_array.length; i++){
      answerList.push(
        <div className="answerSelection" key={i}>
          <label>{props.answer_array[i]}</label>
          <input type="radio" id={props.answer_array[i]} />
        </div>
      )
    }
  }
  return(
    <div className="answerList">
      {props.answer_array
        ?
        <div>
          <div>Answer Choices:</div>
            {answerList}
        </div>
        :
        <div>
          <form className="answerField">
            <input type="text" name="answer" />
          </form>
        </div>
      }
    </div>
  )
}

export default AnswerList
