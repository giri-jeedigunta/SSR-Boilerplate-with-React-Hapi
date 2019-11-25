//start up for client side
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import routesList from './routes';

ReactDOM.hydrate(
  <BrowserRouter>
      {routesList.map(route => <Route key={route.path} {...route} />)}
  </BrowserRouter>,
  document.querySelector('#app')
);

//Render works too but it will re-render the whole component along with binding the events.
//ReactDOM.render(<Hello />, document.querySelector('#app'));
