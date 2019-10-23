import Hapi from "@hapi/hapi";
import Inert from "@hapi/inert";
import routes from './routes';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost"
  });

  await server.register(Inert);
  await server.route(routes);
  await server.start();

  console.log("\n SERVER up and running on... ");
  console.dir(server.info);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();