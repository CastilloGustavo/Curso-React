import React, { Component } from 'react';
import carsJson from './data/cars.json'
/* Array Normal
class AppListados extends Component {

  render() {
    const numeros = [1,1,2,5,9,65];

    return(<div className='App'>
      <h4> Trabajando Con Listas</h4>
        {numeros.map((number,index)=>{
          return <p key={index}> Soy el numero {number} </p>
        })}
     </div>);
  }
}
*/
/*Array with json*/
class CarsItem extends Component{
  render(){
    const {
      item
      } = this.props;

    return <li> Nombre : {item.name} Compania : {item.company} </li>
  }
}

class AppListados extends Component {

  render() {

    return(<div className='App'>
      <h4> Trabajando Con Listas Objetos</h4>
       <ul>
        {carsJson.map((item)=>{
          return <CarsItem key={item.id} item={item} />
        })}
        </ul>
     </div>);
  }
}

export default AppListados;
