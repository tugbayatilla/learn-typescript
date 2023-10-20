import {Person} from "./index";

export class Student extends Person {
    // we are not using public access modifier here for firstName and lastName
    // because in super class, the properties are already created with using 'public' access modifier
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        console.log('taking test')
    }
}