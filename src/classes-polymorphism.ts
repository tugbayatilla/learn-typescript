// many forms
// allow us to apply Open-Close Principle
class Person3 {
    constructor(public firstName: string, public lastName: string) {
    }
    get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    };
    walk(): void {
        console.log('walking');
    };
}

class Student3 extends Person3 {
    // we are not using public access modifier here for firstName and lastName
    // because in super class, the properties are already created with using 'public' access modifier
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }
    takeTest() {
        console.log('taking test')
    }
}

class Teacher3 extends Person3 {
    override get fullName(): string { 
        return 'Professor '  + super.fullName
    };
}

class Principal extends Person3 {
    override get fullName(): string {
        return 'Principal '  + super.fullName
    };
}

printNames([
    new Student3(1,'john','smith'),
    new Teacher3('garry','anderson'),
    new Principal('henry','jefferson'),

])

function printNames(people: Person3[]){
    for(let person of people){
        console.log(person.fullName)
    }
}