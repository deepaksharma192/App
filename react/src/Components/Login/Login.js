import React, { Component } from 'react'
import Design from './Design'

class Login extends Component {
  constructor(props){
      super(props)
      this.state={
        users:{email:"",pass:""}
      }
  }
  submit(){
console.log("object")
  }
  eventsChek(){

  }
  render() {
    const {users}=this.state.users;
    return (
      <div>
        <Design users={users} submit={this.submit} eventsChek={this.eventsChek}/>
      </div>
    )
  }
}

export default Login