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