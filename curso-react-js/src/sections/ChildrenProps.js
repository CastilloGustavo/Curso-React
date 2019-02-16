import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Box extends Component{
  render(){
    return(
      <div style={{border:'1px solid #00F7', margin :5 ,padding : 5}}>
        {this.props.children}
      </div>
    )
  }
}

class Artical extends Component{
  static propTypes ={
    autor : PropTypes.string.isRequired
  }
  render(){
    const {
      title,
      autor,
      date,
      children
    } = this.props;
    return(
      <div>
        <section style={{border:'1px solid #00F7', margin :5 ,padding : 5}}>
          <h2>{title}</h2>
          {autor && <p><em>Escrito por {autor}</em></p>}
          <Box>{date}</Box>
          <artical>
            {children}
          </artical>
        </section>
        </div>
    )
  }
}

class AppChildrenProps extends Component {


  render() {

    return(
      <div className="App">
        <h4>Trabajando Con Children Props</h4>
        <Artical
          title='Games OF Thrones'
          autor = 'Gus'
          date = { new Date().toLocaleDateString()}
        >
           <p> Contenido del articulo</p>
           <Box>Soy un box dentro de un Children</Box>
           <strong>Siga leyendo </strong>
        </Artical>
      </div>
    );
  }
}

export default AppChildrenProps;
