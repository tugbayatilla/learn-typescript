let x: any; // avoid this type of code as must as possible.

function render1(document: any){ // defining any is not a good idea
    document.move()
    document.fly()
    document.whateverWeWant()
} 

function render2(document: unknown){ // defining unknown instead of any is a good idea
    //document.move() <-- compiler error
    //document.fly() <-- compiler error
    //document.whateverWeWant() <-- compiler error
} 

function render3(document: unknown){ 
    // Narrowing
    if(typeof document === 'string')
        document.toUpperCase();

    // if document is custom type object
    //if(document instanceof WordDocument)
    //    document.createPDF()
} 



