import Path from "path";
import serverRender from './utils/serverRenderer.jsx';

export default [
    // Static Files required Inert
    {
        path: "/{param*}",
        method: "GET",
        config: {
          handler: {
            directory: {
              path: Path.resolve("dist")
            }
          }
        }
    }, 

    // Default Route
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
          return serverRender();
        }
      }    
]