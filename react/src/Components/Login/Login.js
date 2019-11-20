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
    console.log(this.state);
  }
  BindEvents=(event)=>{
    if(event.target.id=='email'){
      this.setState({
        users:{...this.state.users, email:event.target.value}
      })
    }else{
      this.setState({
        users:{...this.state.users, pass:event.target.value}
      })
    }
    
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