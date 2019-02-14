import React, { Component } from 'react';



class AppEventos extends Component {
  constructor(){
    super()
    this.state = {mouseX:0,mouseY:0}
  }

   onClickBtnAqui(e) {
    console.log(e);
    console.log('Si me Apretaste');
  }
  handleMouseMove = (e) => {
   const{clientX,clientY} = e;
   this.setState({mouseX:clientX,mouseY:clientY});
  }

  render() {

    return(<div className='App'>
      <h4> Trabajando Con Listas Eventos</h4>
      <button onClick={this.onClickBtnAqui} > Hola Presiona Aqui! </button>
      <div onMouseMove={this.handleMouseMove} style={{border:'1px solid #000', marginTop: 10, paddingTop: 10 }}>
      <p>{this.state.mouseX},{this.state.mouseY}</p>
      </div>
     </div>);
  }
}

export default AppEventos;
