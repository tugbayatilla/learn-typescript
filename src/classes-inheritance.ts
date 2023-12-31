// parent, base, super --> Person class
// child, derived, sub --> Student or Teacher clas

import { Person } from './classes'
class Student extends Person {
    // we are not using public access modifier here for firstName and lastName
    // because in super class, the properties are already created with using 'public' access modifier
    constructor(public studentId: number, firstName: string, lastName: string) { 
        super(firstName, lastName);
    }
    takeTest() {
        console.log('taking test')
    }
}

let student = new Student(1, 'tugbay', 'atilla');
student.walk();
student.takeTest();
console.log(student.studentId)
console.log(student.firstName)
console.log(student.lastName)