//start up for client side
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routesList from './routes';
import { Provider } from 'mobx-react';
import TodoStore from './stores/TodoStore';

const store = new TodoStore();

let preloadedState = [];

if (undefined !== window) {
  preloadedState = (window.__INITIAL_TODOS__).split(',');
  preloadedState.map(todoItems => store.addTodo(todoItems))
}

ReactDOM.hydrate(
  <Provider store={store} >
    <BrowserRouter>
      <Switch>
        {routesList.map(route => <Route key={route.path} {...route} />)}
      </Switch>
      </BrowserRouter>
  </Provider>,
    document.querySelector('#app')
  );

  //Render works too but it will re-render the whole component along with binding the events.
//ReactDOM.render(<Hello />, document.querySelector('#app'));
