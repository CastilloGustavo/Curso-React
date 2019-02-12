import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//function Hello(props)
//{
//  return <h2>{props.title}</h2>
//}

//const Hello = (props) => {return <h2>{props.title}</h2> }

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

/*<p>{this.props.text}</p>
<p>{this.props.number}</p>
<p>{resultText}</p>*/
class Text extends Component {
  render() {
    //const resultText = this.props.boolean ? "Cliente" : "Vendedor"
    const arrayOfNumber = this.props.arrayOfNumber.map(x => x *2);
    return <div>
     <p>{arrayOfNumber.join(", ")}</p>
     <p>{this.props.objectwithinfo.key}</p>
    </div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Hello title="Hola Mundo React 2" />
          <div>
             <a className="App-link" target="_blank"  rel="noopener noreferrer" href="https://google.com">Aqui Abriendo Otro Explorador</a>
          </div>
        </header>
        <Text
          arrayOfNumber={[0,1,2]}
          text="Soy texto"
          objectwithinfo={{key:"Soy key 1",key2:"Soy key2"}}
          number={2}
          boolean={true}
          />
      </div>
    );
  }
}

export default App;
