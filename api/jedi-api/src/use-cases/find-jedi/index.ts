import { InMemoryPeopleRepository } from "../../adapter/InMemoryPeopleRepImpl";
import { JediFindUserCase } from "./jediFindUserCase";

const peopleRepository = new InMemoryPeopleRepository();
const jediFindUserCase = new JediFindUserCase(peopleRepository);
export { jediFindUserCase };
