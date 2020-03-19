import React from "react";
import { StaticRouter, Route } from "react-router-dom";
import routesList from "../client/routes";
import { clientScripts, vendorScripts } from "./utils";

export default req => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Boilerplate - SSR with HapiJS, React</title>
      </head>
      <body>
        <div id="app">
          <StaticRouter location={req.path} context={{}}>
            {routesList.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </StaticRouter>
        </div>
        {vendorScripts.map(
          scriptPath =>
            scriptPath && <script key={scriptPath} src={scriptPath} />
        )}
        {clientScripts.map(
          scriptPath =>
            scriptPath && <script key={scriptPath} src={scriptPath} />
        )}
      </body>
    </html>
  );
};
