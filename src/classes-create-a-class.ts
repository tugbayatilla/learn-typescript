class Account{
    readonly id: number; // these properties are not exist in javascript, only exist in Typescript
    owner: string; // these are public properties
    private _balance: number;
    nickname?: string // this property is created later but as optional 
    
    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    
    deposit(amount: number):void {
        // this.id = 0; this should not happen. useing readonly keyword
        if(amount<0)
            throw new Error('Invalid amount');
        
        // record transaction object
        
        this._balance += amount + this.calculateTax();
    }
    
    getBalance(): number{ // this is an option you can make but there is a better solution
        return this._balance;
    }
    
    private calculateTax():number { // this is another private method 
        return 0;
    }
}

let account = new Account(1, 'tugbay', 0);
account.deposit(100);
console.log(account)

// Union
console.log(typeof account) // returns object
console.log(account instanceof Account) // returns true or false

console.log(account.getBalance()) // there is better solution than this one.
