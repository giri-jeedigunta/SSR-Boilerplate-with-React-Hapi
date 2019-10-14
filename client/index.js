console.log('Client');
//start up for client side
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello.jsx';


ReactDOM.hydrate(<Hello />, document.querySelector('#app'));