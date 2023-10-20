// many forms
// allow us to apply Open-Close Principle

import {Person, Student } from "./classes";

class Teacher3 extends Person {
    override get fullName(): string { 
        return 'Professor '  + super.fullName
    };
}

class Principal extends Person {
    override get fullName(): string {
        return 'Principal '  + super.fullName
    };
}

printNames([
    new Student(1,'john','smith'),
    new Teacher3('garry','anderson'),
    new Principal('henry','jefferson'),

])

function printNames(people: Person[]){
    for(let person of people){
        console.log(person.fullName)
    }
}