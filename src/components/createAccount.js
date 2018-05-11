import React, {Component} from "react"
import {link} from "react-router-dom"

class CreateAccount extends Component{
  async addNewUser(newUser){
    await fetch("http://localhost:5000/",
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)

    });
  }
  submitNewUser = e => {
    e.preventDefault()
    let newUser = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value
    }
    this.addNewUser(newUser)
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
