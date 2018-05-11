import React, {Component} from "react"
import {link} from "react-router-dom"

class CreateAccount extends Component{

  render(){
    return(
      <div className="createAccount">
        <div className="container">
          <div className="linkHeader">
            <Link to="/survey-list">Return to survey list</Link>
          </div>
          <div className="newUser">
            <form name="newUser">
              <input type="text"
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateAccount
