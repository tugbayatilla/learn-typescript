let speed: number | null = null;
let ride1 = {
    // falsy -> undefined, null, '', false, 0 <-- zero is the problem
    speed: speed || 30
}

// solution 1
let ride2 = {
    speed: speed !== null ? speed : 30
}

// better solution 2
let ride3 = {
    // nullish coaelscing operator (??)
    speed: speed ?? 30
}
