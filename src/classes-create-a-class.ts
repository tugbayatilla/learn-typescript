class Account{
    id: number; // these properties are not exist in javascript, only exist in Typescript
    owner: string; // these are public properties
    balance: number;
    
    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    
    deposit(amount: number):void {
        if(amount<0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
}

let account = new Account(1, 'tugbay', 0);
account.deposit(100);
console.log(account)

// Union
console.log(typeof account) // returns object
console.log(account instanceof Account) // returns true or false
