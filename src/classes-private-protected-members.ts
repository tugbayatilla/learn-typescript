// protected methods will create coupling, be aware!

class ProtectedPerson {
    constructor(public firstName: string,  public lastName: string) { }
    protected walk(): void {
        console.log('walking');
        this.someActions();
    };
    protected someActions(): void {
        console.log('some actions');
    };
}

class ProtectedStudent extends ProtectedPerson {
   constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }
    takeTest() {
       this.walk(); // this protected method can be used in child class
        console.log('taking test')
    }
}


let protectedStudent = new ProtectedStudent(1, 'john', 'doe');
protectedStudent.takeTest();
//walking
//some actions
//taking test
