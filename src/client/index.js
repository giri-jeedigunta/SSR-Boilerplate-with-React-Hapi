//start up for client side
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routesList from './routes';

ReactDOM.hydrate(
  <BrowserRouter>
    <Switch>
      {routesList.map(route => <Route key={route.path} {...route} />)}
    </Switch>
  </BrowserRouter>,
  document.querySelector('#app')
);

//Render works too but it will re-render the whole component along with binding the events.
//ReactDOM.render(<Hello />, document.querySelector('#app'));
