// protected methods will create coupling, be aware!

class Person4 {
    constructor(public firstName: string, public lastName: string) {
    }
    protected walk(): void {
        console.log('walking');
        this.someActions();
    };

    protected someActions(): void {
        console.log('some actions');
    };
}

class Student4 extends Person4 {
   constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }
    takeTest() {
       this.walk(); // this protected method can be used in child class
        console.log('taking test')
    }
}


let student4 = new Student4(1, 'john', 'doe');
student4.takeTest();
//walking
//some actions
//taking test
