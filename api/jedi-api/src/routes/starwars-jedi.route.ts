import * as restify from "restify";
import { environment } from "../../common/environment";
import { Router } from "../../common/router";
import { jediControler } from "../controller";

class StarWarsJediRouter extends Router {
  applyRoutes(application: restify.Server) {
    application.get(
      `${environment.server.base_path}/jedi`,
      jediControler.findAllJedis()
    );
  }
}

export const jediRoutes = new StarWarsJediRouter();
