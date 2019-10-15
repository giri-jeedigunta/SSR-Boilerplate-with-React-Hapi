import React from "react";
import Hello from '../client/components/Hello.jsx';

export default () => {
    return (
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Boilerplate - SSR</title>
        </head>
        <body>
            <div id="app">
                <Hello />
            </div>
            <script src="bundle.js"></script>
        </body>
        </html>
    )                        
};