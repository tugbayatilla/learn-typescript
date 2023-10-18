class Ride {
    private static _activeRides: number = 0;
    
    start(): void { Ride._activeRides++;}
    stop(): void { Ride._activeRides--; }
    
    static get activeRides(){
        return Ride._activeRides;
    }
}

let uber1 = new Ride();
uber1.start()

let uber2 = new Ride();
uber2.start();

// Ride.activeRides = 100; this cannot be assigned because it has only setter.

console.log(Ride.activeRides) // returns 2