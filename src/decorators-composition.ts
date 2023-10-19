
function ComponentWithValue3(value: number) {
    // returning class decorator function
    return function (constructor: Function) {
        console.log('decorator called with value: ' + value); 
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = (): void => {
            console.log('Inserting component into the DOM')
        };
    }
}

function Pipe(constructor: Function) {
    console.log('Pipe decorator called');
    constructor.prototype.pipe = true;
}

@ComponentWithValue3(1) // second, this one will be called.
@Pipe // this decorator will be called first, like function definitions in math like ComponentWithValue(Pipe(x))
class ProfileComponent3 {
    
}