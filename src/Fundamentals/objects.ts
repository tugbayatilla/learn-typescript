// Objects
let employee1 = { id: 1 };
// employee1.name = 'tugbay' <-- this is not valid, name does not exist
let employee2: { id: number; name: string; } // defining the object shape 
    = { id: 1, name: 'tugbay' };
employee2.name = 'altered name here';
// make optional property
let employee3: { id: number; name?: string; } = { id: 1 };
employee3.name = 'tugbay';
// readonly property
let employee4: { readonly id: number; name: string; } = { id: 1, name: 'tugbay' };
// employee4.id = 2 <-- this is not valid, id is readonly
// Has retire function
let employee5: {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
} = {
    id: 1,
    name: 'tugbay',
    retire: (date: Date) => {
        console.log("Retirement data is " + date);
    }
};
let now = new Date();
employee5.retire(now);
