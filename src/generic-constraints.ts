function echoStringOrNumber<T extends number | string>(value: T): T {
    console.log(value);
    return value;
}

echoStringOrNumber(1)
echoStringOrNumber('echo string')
//echoStringOrNumber(true) <-- compile error

function echoObjectShape<T extends {name: string}>(value: T): T {
    console.log(value);
    return value;
}

echoObjectShape({name: 'tugbay'})

class Person6 {
    constructor(public name: string) {
    }
}

class Customer6 extends Person6 {
    
}

echoObjectShape(new Person6('person 6'))
echoObjectShape(new Customer6('customer 6'))

function echo<T extends Person6>(value: T): T {
    console.log(value);
    return value;
}

echo(new Person6('person 6'))
echo(new Customer6('customer 6'))
