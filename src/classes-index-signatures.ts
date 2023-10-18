// creating properties dynamically
class SeatAssignment {
    // Index signature property
    [seatNumber: string]: string
}

let seats = new SeatAssignment();
seats.A1 = 'tugbay'
seats.A2 = 'john'
seats['A3'] = 'allen';

