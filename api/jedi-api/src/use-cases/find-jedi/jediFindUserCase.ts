import { People } from "../../domain/people";
import { PeopleRepository } from "../../repositories/PeopleRepository";

export class JediFindUserCase {
  constructor(private userRep: PeopleRepository) {}
  
  async findAllJedis(): Promise<People[]> {
    const people = this.userRep.findAllPeople();
    let jedis: People[] = [];
    for (let index = 0; index < people.length; index++) {
      const element = people[index];
      if (element.jedi) {
        jedis.push(element);
      }
    }
    return jedis;
  }
}
