import React, { Component } from 'react';

class ComponentWillAmount extends Component{
  constructor(props){
    console.log("constructor");
    super(props)
    this.state = {mensaje: 'Primer Mensaje'}
  }
  componentWillMount(){
    console.log("Will Mount");
    this.setState({mensaje: 'Primermensaje 2'});
  }
  componentDidMount(){
      console.log("Did Mount");
      this.setState({mensaje: 'Primermensaje 2'});
    }
  render(){
    console.log("render");
    return(
      <div>
        <h4> Ciclo de Vida ComponentWillAmount </h4>
        <p>{this.state.mensaje}</p>
      </div>
    )
  }
}

export default ComponentWillAmount
