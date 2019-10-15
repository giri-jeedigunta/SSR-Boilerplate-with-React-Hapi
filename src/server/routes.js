import Path from "path";
import { renderToString } from "react-dom/server";
import htmlTemplate from './htmlTemplate.jsx';

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
        handler: (request, h) => {
          return "<!DOCTYPE html>"+renderToString(htmlTemplate());
        }
      }    
]