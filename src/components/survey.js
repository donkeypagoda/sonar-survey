import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Question from "./question.js"

class Survey extends Component{

  render(){
    return(
      <div className="question">
        <Question />
      SURVEY TEST
      </div>
    )
  }
}

export default Survey
