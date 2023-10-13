// Functions
// always anotate return type
function calculateTax(income: number): number {
    // let x = 1; there is an unused variable here. to prevent this, use 'noUnusedLocals: true'
    if (income < 50000)
        return income * 2.2;

    else
        return income;
}
// javascript return as default 'undefined' in functions. To prevent this, use 'noImplicitReturns: true'
function calculateTax1(income: number, taxYear: number): number {
    if (taxYear < 2022)
        return income * 2.2;

    else
        return income;
}
calculateTax1(10000, 2021);
// Optional argument
function calculateTax2(income: number, taxYear?: number): number {
    if ((taxYear || 2022) < 2022) // javascript trick, not a good idea
        return income * 2.2;

    else
        return income;
}
calculateTax2(10000);
// default value
function calculateTax3(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022)
        return income * 2.2;

    else
        return income;
}
calculateTax3(10000);
