import { People } from "../domain/people";

export interface PeopleRepository {
  findAllPeople(): People[];
}
