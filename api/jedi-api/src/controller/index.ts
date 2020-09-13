import { jediFindUserCase } from "../use-cases/find-jedi";
import { JediController } from "./jediController";
const jediControler = new JediController(jediFindUserCase);
export { jediControler };

