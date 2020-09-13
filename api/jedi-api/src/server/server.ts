import * as restify from "restify";
import * as corsMiddleware from "restify-cors-middleware";
import serverHealth from "server-health";
import { environment } from "../../common/environment";
import { Router } from "../../common/router";
import { handleError } from './error.handler';

export class Server {
  application: restify.Server;

  initRoutes(routers: Router[]): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.application = restify.createServer({
          name: "template",
        });
        this.application.use(restify.plugins.queryParser());
        this.application.use(restify.plugins.bodyParser());

        serverHealth.exposeHealthEndpoint(
          this.application,
          `${environment.server.base_path}/health`,
          "restify"
        );

        const cors = corsMiddleware.default({
          origins: ["*"],
          allowHeaders: ["Authorization"],
          exposeHeaders: ["Authorization"],
        });

        this.application.pre(cors.preflight);
        this.application.use(cors.preflight);

        this.application.on('restifyError',handleError)

        this.application.listen(environment.server.port, () => {
          resolve(this.application);
        });
        for (let router of routers) {
          router.applyRoutes(this.application);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  bootstrap(routers: Router[] = []): Promise<Server> {
    return this.initRoutes(routers).then(() => this)
  }

  shutdown() {}
}
