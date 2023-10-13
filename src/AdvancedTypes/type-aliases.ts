// Type Aliases

type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
}

let employee: Employee = {
    id: 1,
    name: 'tugbay',
    retire: (date: Date) => {
        console.log("Retirement data is " + date);
    }
};
