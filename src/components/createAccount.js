import React, {Component} from "react"
import {Link} from "react-router-dom"

class CreateAccount extends Component{
  async addNewUser(newUser){
    await fetch("http://localhost:5000/users",
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)

    });
    const result = await fetch("http://localhost:5000/users")
    const {user} = await result.json();
    console.log(user)
  }
  submitNewUser = e => {
    e.preventDefault()
    console.log(e)
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
            <form name="newUser" onSubmit={this.submitNewUser}>
              <label>Your Name</label>
                <input type="text" name="userName" />
              <label>Email</label>
                <input type="text" name="email" />
              <label>Password</label>
                <input type="text" name="password1" />
              <label>Password Confirm</label>
                <input type="text" name="password2" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateAccount
