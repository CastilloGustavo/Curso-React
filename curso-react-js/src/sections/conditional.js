import React, { Component } from 'react'
import ComponentWillAmount from './life-cycle/ComponentWillAmount.js';

class LoginButton extends Component  {
  render() {
    return(
      <button>Login </button>
    )
  }
}
class LogoutButton extends Component  {
  render() {
    return(
      <div>
        <p>Bienvenido, usuario</p>
        <button>Login Out </button>
      </div>
    )
  }
}


function useConditionalRendering (isUserLog){
  if(isUserLog)
  {
    return <LoginButton />;
  }

  else
   return <LogoutButton />;
}


export default class ConditionalSection extends Component{
  constructor(){
    super()
    this.state = {isUserLog : true}
  }

  render(){
    const conditionalComponent = useConditionalRendering(this.state.isUserLog);
    return(
      <div>
       <h4>Conditional Section </h4>
       {conditionalComponent}       
       <ComponentWillAmount/>
      </div>
    )
  }
}
