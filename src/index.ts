// Build-in types

let sales: number = 123_456_789;
let course: string = "typescript";
let is_published: boolean = true;

// any type
let level;
level = 1;
level = "a";

function render(document: any) {
  console.log(document);
}

// Arrays

let numberJs = [1, 2, '3'] // valid for javascript

let numbers: number[] = [1,2,3] // define number of array type 

let anyNumbers = []
anyNumbers[0] = 1
anyNumbers[1] = '1' // this is valid because anyNumbers type is any[]

let emptyNumberArray: number[] = [] // ampty array

// Tuples

let user: [number, string] = [1, 'tugbay'] // exactly 2 elements
console.log(user[0]) // 1
console.log(user[1]) // 'tugbay'

let bigUser: [number, string, boolean, number] = [1, 'tugbay', true, 42] // not a good idea, because it is unclear

// Enums

const small = 1;
const medium = 2;
const large = 3;

// PascalCase
enum Size { Small, Medium, Large }
let mySize: Size = Size.Medium;
console.log('My Size:' + mySize)

const enum Size2 { Small='s', Medium='m', Large='l' } // const makes this code more optimized
let mySize2: Size2 = Size2.Medium;
console.log('My Size2:' + mySize2)

// Functions

// always anotate return type
function calculateTax(income: number): number{
    // let x = 1; there is an unused variable here. to prevent this, use 'noUnusedLocals: true'
    if(income < 50_000)
        return income * 2.2;
    else
        return income;
}
// javascript return as default 'undefined' in functions. To prevent this, use 'noImplicitReturns: true'

function calculateTax1(income: number, taxYear: number): number{
    if(taxYear < 2022) 
        return income * 2.2;
    else
        return income;
}
calculateTax1(10_000, 2021);


// Optional argument
function calculateTax2(income: number, taxYear?: number): number{
    if((taxYear || 2022) < 2022) // javascript trick, not a good idea
        return income * 2.2;
    else
        return income;
}
calculateTax2(10_000);

// default value
function calculateTax3(income: number, taxYear: number = 2022): number{
    if(taxYear < 2022) 
        return income * 2.2;
    else
        return income;
}
calculateTax3(10_000);


// Objects

let employee1 = { id: 1 }
// employee1.name = 'tugbay' <-- this is not valid, name does not exist

let employee2: { id: number, name: string } // defining the object shape 
= { id: 1, name: 'tugbay' }
employee2.name = 'altered name here'

// make optional property
let employee3: { id: number, name?: string } 
= { id: 1 }
employee3.name = 'tugbay'


// readonly property
let employee4: { readonly id: number, name: string } 
= { id: 1, name: 'tugbay' }
// employee4.id = 2 <-- this is not valid, id is readonly


// Has retire function
let employee5: { 
    readonly id: number, 
    name: string, 
    retire: (date: Date) => void } 
= { 
    id: 1, 
    name: 'tugbay',
    retire: (date: Date) => {
        console.log("Retirement data is " + date)
    }
}
let now = new Date();
employee5.retire(now)

