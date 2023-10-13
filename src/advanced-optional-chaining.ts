type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0);

// option 1
if(customer !== null && customer !== undefined)
    console.log(customer.birthday)

// option 2: this is called 'optional property access operator'
console.log(customer?.birthday?.getFullYear())

// Optional element access
// customer?.[0]

// Optional call (?.)
let log: any = null;
log?.('a');
