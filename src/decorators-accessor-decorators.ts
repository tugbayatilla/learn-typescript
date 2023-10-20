import {Person} from "./classes";

// @ts-ignore: ignore unused parameters
function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor){
    const original = descriptor.get; // we cannot use value property because it only works with methods
    descriptor.get  = function () {
        const result = original!.call(this); // getter will have always a value, we can use !
        if(typeof result === 'string')
            return result.toUpperCase();
        else
            return result;
    }
}


class CapitalizedPerson extends Person{
    @Capitalize
    override get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}
let person8 = new CapitalizedPerson('tugbay', 'atilla');
console.log(person8.fullName) // TUGBAY ATILLA
