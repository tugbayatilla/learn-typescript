// null and undefined are problems.

function greet1(name: string){
    console.log(name.toUpperCase())
}
// greet1(null) - compiler raises error because in tsconfig, strictNullCheck:true


// support null
function greet2(name: string | null){
    if(name)
        console.log(name.toUpperCase())
    else
        console.log('Null:Hola!')
}

greet2(null);


// support undefined
function greet3(name: string | null | undefined){
    if(name)
        console.log(name.toUpperCase())
    else
        console.log('Undefined: Hola!')
}

greet3(undefined);

