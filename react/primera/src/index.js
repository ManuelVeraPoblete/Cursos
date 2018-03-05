import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Detalle from './Detalle.js';
import Menu from './Menu.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Detalle />, document.getElementById('deta'));
registerServiceWorker();
