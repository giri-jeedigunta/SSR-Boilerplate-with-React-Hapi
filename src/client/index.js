//start up for client side
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes.jsx';

ReactDOM.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.querySelector('#app'));

//Render works too but it will re-render the whole component along with binding the events. 
//ReactDOM.render(<Hello />, document.querySelector('#app'));