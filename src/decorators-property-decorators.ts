function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: string;
        
        const descriptor: PropertyDescriptor = {
            get() {return value;},
            set(newValue: string) {
                if(newValue.length < length)
                    throw new Error(`${propertyName} should be at least ${length} chars long.`)
                
                value = newValue;
            }
        }
        
        Object.defineProperty(target, propertyName, descriptor);
    }
}

class User3 {
    @MinLength(4)
    password: string;
    
    constructor(password: string) {
        this.password = password;
    }
}

let user3 = new User3('pass');
console.log(user3.password)
