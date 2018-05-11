import React, {Component} from "react"
import {link} from "react-router-dom"

class CreateAccount extends Component{
  submitNewUser = e => {
    e.preventDefault()
    let newUser = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value
    }
  }

  render(){
    return(
      <div className="createAccount">
        <div className="container">
          <div className="linkHeader">
            <Link to="/survey-list">Return to survey list</Link>
          </div>
          <div className="newUser">
            <form name="newUser">
              <input type="text" onSubmit={this.submitNewUser}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateAccount
