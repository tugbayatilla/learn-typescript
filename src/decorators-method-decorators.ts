// signature for method decorator

import {Person} from "./classes";

// @ts-ignore: unused parameters suppressed
function Log(target: any, methodName: string, descriptor: PropertyDescriptor){
    const original = descriptor.value as Function;
    descriptor.value = function (...args  : any): void { // you cannot use arrow function here because of this keyword
        console.log('Before');
        original.call(this, ...args) // ..args, spreads all arguments one by one 
        console.log('After');
    }
    
    /*
    // replace totally the function
    descriptor.value = function() { 
     
        console.log('New Implementation')
    }
    */ 
    
}

class LogPerson extends Person{
    @Log
    say(message: string){
        console.log('Person says ' + message);
    }
}

let person7 = new LogPerson('tugbay','atilla');
person7.say('hello world');