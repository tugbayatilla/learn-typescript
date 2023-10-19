// decorators are changes behaviour of classes

// decorator is just a function

// signature for class decorator
function Component(constructor: Function) {
    console.log('decorator called'); // this will be called directly when we run this file
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = ():void => {
        console.log('Inserting component into the DOM')
    };
}

@Component
class ProfileComponent {
    
}