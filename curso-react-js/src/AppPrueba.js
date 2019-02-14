import React, { Component } from 'react';

class Title extends Component {
  render() {
    return(<h1>{this.props.text}</h1>);
  }
}

Title.defaultProps = {
  text : "Primer Contador (Manejando Estados)"
}
/* Inicilizacion con contructor normal
class Contador extends Component {
  constructor() {
    super()
    this.state = {contando : 1}
  }
  render(){
    return(<spam>{this.state.contando}</spam>)
  }
}*/
/*Usando "Class Fields" del comité TC39 para Javascript */
class Contador extends Component {
  state = {contando : this.props.contadorInicial}
  constructor(props){
    super(props)
    setInterval(()=>{
      this.setState({contando : this.state.contando + 1});
    },1000);
  }
  render(){
    return(<ContadorNumero numero={this.state.contando} />)
  }
}
Contador.defaultProps = {
  contadorInicial : 11
}
class ContadorNumero extends Component{
  render(){
    return <h1>{this.props.numero}</h1>
  }
}



class AppPrueba  extends Component{
render(){
  return(<div className='App'>
     <Title/>
     <Contador contadorInicial={10} />
     <Contador />     
   </div>);
}

}

export default AppPrueba;
