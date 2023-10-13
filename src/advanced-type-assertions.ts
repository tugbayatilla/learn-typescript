let phone = document.getElementById('phone') as HTMLInputElement;
// no type convertion when we use 'as' operator
// HTMLElement is default
// casting HTMLInputElement to reach value property
console.log(phone.value) //<-- this code might fail

let phone2 = <HTMLInputElement> document.getElementById('phone');
console.log(phone.value)