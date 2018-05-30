import React from "react"

function AnswerList(props){
  let answerList = []
  if (typeof props.answer_array === "object"){
    answerList.push(<div key={-1}>Answer Choices:</div>)
    let ansName = "mc" + props.id
    for (let i = 0; i < props.answer_array.length; i++){
      answerList.push(
        <div className="answerSelection" key={i}>
          <label>{props.answer_array[i]}</label>
          <input type="radio" get={props.answer_type} name={ansName} id={props.answer_array[i]} />
        </div>
      )
    }
  }
  else if (props.answer_type === "boolean"){
    answerList = [
      <div className="answerSelection" key={0}>
        <label>True</label>
        <input type="radio" get={props.answer_type} id="true" name="tfAns"/>
        <label>False</label>
        <input type="radio" get={props.answer_type} id="false" name="tfAns"/>
      </div>
    ]
  }
  else if (props.answer_type === "rating"){
    answerList = [
      <div className="answerSelection" key={0}>
        <label>Please Select Between 0 and 10</label>
        <input type="range" get={props.answer_type} id="range" min="0.0" max="10.0" defaultValue="5.0" />
      </div>
    ]
  }
  else {
    answerList = [
      <div key={0}>
        <input type="text" get={props.answer_type} name="answer" />
      </div>
    ]
  }
  return(
    <div className="answerList">
      {answerList}
    </div>
  )
}

export default AnswerList
