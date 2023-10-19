
function ComponentWithValue(value: number) {
    // returning class decorator function
    return function (constructor: Function) {
        console.log('decorator called with value: ' + value); 
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = (): void => {
            console.log('Inserting component into the DOM')
        };
    }
}

@ComponentWithValue(1)
class ProfileComponent2 {
    
}