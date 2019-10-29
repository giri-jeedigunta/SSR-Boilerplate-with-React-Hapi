import Hapi from "@hapi/hapi";
import Inert from "@hapi/inert";
import routes from './routes';

const init = async () => {
  const server = Hapi.server({
    port: 3001
  });

  await server.register(Inert);
  await server.route(routes);
  await server.start();

  console.log("\n------------------------------");
  console.log("  SERVER up and running...");
  console.log("------------------------------");
  console.dir(server.info);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();