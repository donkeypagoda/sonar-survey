import React from "react"

function Question(props){
  return(
    <div className="question">
      <div className="container">
        <div className="prompt">
          {props.prompt}
        </div>
      </div>
    </div>
  )
}

export default Question
