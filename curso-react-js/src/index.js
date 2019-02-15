import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import AppPrueba from './AppPrueba';
//import AppRenderizadoCondicional from './AppRenderizadoCondicional';
//import AppListados from './AppListados';
//import AppEventos from './AppEventos';
//import AppFormulario from './sections/AppFormulario';
import AppChildrenProps from './sections/ChildrenProps';






import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<AppPrueba />, document.getElementById('root'));
//ReactDOM.render(<AppRenderizadoCondicional />, document.getElementById('root'));
//ReactDOM.render(<AppListados />, document.getElementById('root'));
//ReactDOM.render(<AppEventos />, document.getElementById('root'));
//ReactDOM.render(<AppFormulario />, document.getElementById('root'));
ReactDOM.render(<AppChildrenProps />, document.getElementById('root'));






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
