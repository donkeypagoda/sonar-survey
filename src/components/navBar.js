import React, {Component} from "react"
import {Link} from "react-router-dom"

class NavBar extends Component {

  render(){
    return(
      <div className="navBar">
        <div className="surveyListLink">
          <Link to="/survey-list/">Click here to take a survey or view results</Link>
        </div>
        <div className="surveyListLink">
          <Link to="/createAccount">Click here to create an account</Link>
        </div>
      </div>

    )
  }
}
