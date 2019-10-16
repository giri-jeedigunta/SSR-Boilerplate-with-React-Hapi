import React from "react";
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/routes.jsx';

export default req => {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <title>Boilerplate - SSR</title>
        </head>
        <body>
            <div id="app">
                <StaticRouter location={req.path} context={{}}>
                    <Routes />
                </StaticRouter>
            </div>
            <script src="bundle.js"></script>
        </body>
        </html>
    )                        
};