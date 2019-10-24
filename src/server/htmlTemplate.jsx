import React from "react";
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/routes';
import bodyScriptsList from './utils';

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
                    <Routes />
                </StaticRouter>
            </div>
            {bodyScriptsList.map(scriptPath => scriptPath && <script key={ scriptPath } src={ scriptPath } />)}
        </body>
        </html>
    )                        
};