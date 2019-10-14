import Path from "path";
import Hapi from "@hapi/hapi";
import Inert from "@hapi/inert";
import serverRender from './serverRenderer.jsx';
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost"
  });

  await server.register(Inert);

  server.route({
    path: "/{param*}",
    method: "GET",
    config: {
      handler: {
        directory: {
          path: Path.resolve("dist")
        }
      }
    }
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return serverRender();
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
