import React, {Component} from "react"
import {Link} from "react-router-dom"

class CreateAccount extends Component{

  async addNewUser(newUser){
    const result = await fetch("http://localhost:5000/users",
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)

    });
    const res = await result.json()
    console.log(res)
    this.props.history.push('/survey-list')
  }

  submitNewUser = e => {
    e.preventDefault()
    
    let newUser = {
      "name": e.target[0].value,
      "email": e.target[1].value,
      "password": e.target[2].value
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
              <button type="submit">Create Account</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateAccount
