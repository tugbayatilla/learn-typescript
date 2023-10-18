class Account{
    nickname?: string // this property is created later but as optional 
    
    constructor(
        public readonly id: number, 
        public owner: string, 
        public _balance: number) {
    }
    
    deposit(amount: number):void {
        if(amount<0)
            throw new Error('Invalid amount');
        
        this._balance += amount;
    }
    
    get balance(): number{ 
        return this._balance;
    }
}

let account = new Account(1, 'tugbay', 0);
account.deposit(100);

console.log(account.balance) 
