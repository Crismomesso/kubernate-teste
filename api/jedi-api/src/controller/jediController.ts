import * as restify from "restify";
import { JediFindUserCase } from "../use-cases/find-jedi/jediFindUserCase";

export class JediController {
  constructor(private jediUserCase: JediFindUserCase) {}
  findAllJedis(): restify.RequestHandlerType {
    return async (req, resp, next) => {
      try {
        const jedis = await this.jediUserCase.findAllJedis();
        resp.json(jedis);
      } catch (error) {
        return next(error);
      }
      return next();
    };
  }
}
