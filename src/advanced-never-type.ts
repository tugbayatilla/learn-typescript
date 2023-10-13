function reject(message: string){
    throw new Error(message);
}

// because as default function reeturns void, and this function always throws exception, 
// next line of code will never be executed. 
// but this is not clear on the code, only in runtime.
reject('...') 
console.log('Hello World')

function reject2(message: string) : never {
    throw new Error(message);
}

// now function returns never, and we can see in compile time, 
// next line of code will never be executed.
reject2('...') 
console.log('Hello World')

function proessEvents(): never {
    // this function never returns because 
    // it has an infitite loop.
    while(true){}
}