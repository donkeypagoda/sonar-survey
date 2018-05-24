import React from "react"

function AnswerList(props){
  console.log(props.answer_type)
  let answerList = []
  if (props.answer_type === "multiple_choice"){
    answerList.push(<div key={-1}>Answer Choices:</div>)
    for (let i = 0; i < props.answer_array.length; i++){
      answerList.push(
        <div className="answerSelection" key={i}>
          <label>{props.answer_array[i]}</label>
          <input type="radio" id={props.answer_array[i]} />
        </div>
      )
    }
  }
  else if (props.answer_type === "boolean"){
    answerList = [
      <div className="answerSelection" key={0}>
        <label>True</label>
        <input type="radio" id="true" />
        <label>False</label>
        <input type="radio" id="false" />
      </div>
    ]
  }
  else if (props.answer_type === "range"){
    answerList = [
      <div className="answerSelection" key={0}>
        <label>Please Select Between 0 and 10</label>
        <input type="range" id="range" min="0.0" max="10.0" value="5.0" />
      </div>
    ]
  }
  return(
    <div className="answerList">
      {props.answer_type != "string"
        ?
        <div>
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
