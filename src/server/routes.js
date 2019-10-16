import Path from "path";
import reactHandler from './reactHandler';
export default [
    // Static Files 
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
        handler: reactHandler
      }    
]