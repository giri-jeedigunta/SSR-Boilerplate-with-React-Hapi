import React from "react";
import { StaticRouter, Route } from 'react-router-dom';
import routesList from '../client/routes';
import { clientScripts, vendorScripts } from './utils';
import { Provider } from 'mobx-react';
import TodoStore from '../client/stores/TodoStore';

export default req => {

    const store = new TodoStore();
    store.addTodo('Todo from SSR');

    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <title>Boilerplate - SSR with HapiJS, React</title>
        </head>
        <body>
          <div id="app">
            <Provider store={store}>
                <StaticRouter location={req.path} context={{}}>
                  {routesList.map(route => <Route key={route.path} {...route} />)}
                </StaticRouter>
              </Provider>
          </div>
          <script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_TODOS__ = "${store.todos.join(',')}"` }} />
          {vendorScripts.map(scriptPath => scriptPath && <script key={ scriptPath } src={ scriptPath } />)}
          {clientScripts.map(scriptPath => scriptPath && <script key={scriptPath} src={scriptPath} />)}
        </body>
        </html>
    )
};
