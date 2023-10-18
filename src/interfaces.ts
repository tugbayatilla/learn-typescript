// to define the shape of objects

// option 1: if you have logic inside in abstract, then abstract is the true choice

// abstract class Calendar { 
//     protected constructor(public name: string) {
//     }
//     abstract addEvent():void;
//     abstract removeEvent():void;
// }

// option 2: shorter and cleaner
interface Calendar { // there is no interface in javascript, only in typescript
    name: string;
    addEvent():void;
    removeEvent():void;
}

interface CloudCalender extends Calendar {
    
}

class GoogleCalendar implements Calendar {
    constructor(public name: string) {
    }
    addEvent(): void {
    }

    removeEvent(): void {
    }
}

// In TypeScript, interfaces and type aliases can be used interchangeably. 

