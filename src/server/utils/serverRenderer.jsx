import React from "react";
import { renderToString } from "react-dom/server";
import Hello from '../../client/components/Hello.jsx';

export default () => {
    const componentData = renderToString(<Hello />);
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>React | SSR | HapiJS | Webpack</title>
    </head>
    <body>
    <div id="app">${componentData}</div>
    <script src="bundle.js"></script>
    </body>
    </html>
    `
};