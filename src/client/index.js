//start up for client side
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello.jsx';

ReactDOM.hydrate(<Hello />, document.querySelector('#app'));

//Render works too but it will re-render the whole component along with binding the events. 
//ReactDOM.render(<Hello />, document.querySelector('#app'));