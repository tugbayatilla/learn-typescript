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

