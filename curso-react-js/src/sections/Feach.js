import React, { Component } from 'react';

class Feach extends Component {
 state = {bpi :{}}
  componentDidMount(){
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(res => res.json())
        .then(data => {
          const {bpi} = data
          this.setState({bpi:bpi});
        });
  }
  _renderCurrencies = () =>{
    const {bpi} = this.state;
    const currencies = Object.keys(bpi);

    return currencies.map(currency =>(
      <div key={currency}>
        1 BTC Vale {bpi[currency].rate}
        <span>-{currency}</span>
      </div>
      ));
  }
  render() {
    return(<div className='App'>
        <h4>Precios de Bitcoins</h4>
        {this._renderCurrencies()}
     </div>);
  }
}

export default Feach;
