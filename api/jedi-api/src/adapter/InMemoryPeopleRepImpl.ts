import { People } from "../domain/people";
import { PeopleRepository } from "../repositories/PeopleRepository";

export class InMemoryPeopleRepository implements PeopleRepository {
  people: People[] = [
    {name:'Luke', jedi:true},
    {name:'Obi-wan', jedi:true},
    {name:'Anakin', jedi:true},
    {name:'Leia', jedi:true},
    {name:'Jar-jar-binks', jedi:false},
    {name:'Han-solo', jedi:false},
  ];

  findAllPeople(): People[] {
    return this.people;
  }
}
