import React, { Component } from 'react';



class Forms extends Component {
  constructor(){
    super();
    this.state = {
      name : "",
      tweitter : "@",
      accepteTerm : false
    }
  }

  handlerClick = (e) =>{
    e.preventDefault();
    const name = this.inputName.value;
    const tweitter = document.getElementById('tweitter').value;
    console.log({name:name,tweiter:tweitter});
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    /*const name = this.inputName.value;
    const tweitter = document.getElementById('tweitter').value;
    console.log({name:name,tweiter:tweitter});*/
    console.log(this.state);
  }
  handleChange = (e) =>{
    this.setState({accepteTerm : e.target.value});
    console.log(e.target.checked);
  }
  render() {

    return(<div className='App'>
      <h4> Trabajando Con Formularios</h4>
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor='name'>Nombre : </label>
          <input
            id='name'
            name='username'
            placeholder='Introduce tu nombre'
            ref={inputElement => this.inputName  = inputElement}
            onChange={ e=> this.setState({name : e.target.value}) }
            value={this.state.name}
          />
        </p>
        <p>
          <label>tweitter : </label>
          <input
            id='tweitter'
            name='tweitterAccount'
            placeholder='Introduce tu tweiter'
            value={this.state.tweitter}
            onChange={ e=> this.setState({tweitter : e.target.value}) }

          />
        </p>
        <p>
          <label>
            <input
            check={this.state.accepteTerm}
            onChange={this.handleChange} type='checkbox'/>
            Accepted Terms
          </label>
        </p>
        <button >Enviar</button>
      </form>
     </div>);
  }
}
/*<button onClick={this.handlerClick}>Enviar</button>*/
export default Forms;
