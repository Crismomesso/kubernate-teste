import { jediRoutes } from "./src/routes/starwars-jedi.route";
import { Server } from "./src/server/server";
const server = new Server();
server
  .bootstrap([jediRoutes])
  .then((serverResp) => {
    console.log("Server is listening on :", serverResp.application.address());
  })
  .catch((error) => {
    console.log("Server failed to start");
    console.error(error);
    process.exit(1);
  });
