class Person2 {
    constructor(public firstName: string, public lastName: string) {
    }
    get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    };
}
class Teacher extends Person2 {
    // to enable reminder of 'override' keyword, we need to enable in tsconfig 'noImplicitOverride:true'
    // if you do not use override, this setting will warn you.
    override get fullName(): string { 
        return 'Professor '  + super.fullName
    };
}

let teacher = new Teacher('john', 'doe');
console.log(teacher.fullName); // return Professor john doe