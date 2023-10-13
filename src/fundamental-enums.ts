// Enums
const small = 1;
const medium = 2;
const large = 3;
// PascalCase
enum Size { Small, Medium, Large }
let mySize: Size = Size.Medium;
console.log('My Size:' + mySize);

const enum Size2 { Small = 's', Medium = 'm', Large = 'l' } // const makes this code more optimized

let mySize2: Size2 = Size2.Medium;
console.log('My Size2:' + mySize2);
