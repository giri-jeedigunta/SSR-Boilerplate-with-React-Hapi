"use strict";

import Path from "path";

import Hapi from "@hapi/hapi";
import Inert from "@hapi/inert";

import React from "react";
import { renderToString } from "react-dom/server";

import Hello from "../client/components/Hello.jsx";

const content = renderToString(<Hello />);
const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React | SSR | HapiJS | Webpack</title>
</head>
<body>
  <div id="app">${content}</div>
  <script src="bundle.js"></script>
</body>
</html>
`;

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    debug: { request: ["error"] }
  });

  await server.register(Inert);

  server.route({
    path: "/{param*}",
    method: "GET",
    config: {
      handler: {
        directory: {
          path: Path.resolve("public")
        }
      }
    }
  });

  server.route({
    method: "GET",
    path: "/",
    options: {
      log: {
        collect: true
      }
    },
    handler: (request, h) => {
      return htmlTemplate;
    }
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
