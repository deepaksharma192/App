import React, { Component } from 'react'
import Design from './Design'

class Login extends Component {
  constructor(props){
      super(props)
      this.state={
        users:{email:"",pass:""}
      }
  }
  submit=()=>{
console.log("object")
  }
  BindEvents=(event)=>{
    console.log(event.target)
    if(event){

    }
    // this.setState({
    //   users:
    // })
  }
  render() {
    const {users}=this.state.users;
    return (
      <div>
        <Design users={users} submit={this.submit} BindEvents={this.BindEvents}/>
      </div>
    )
  }
}

export default Login