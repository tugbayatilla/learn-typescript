class Ride {
    activeRides: number = 0;
    
    start(): void { this.activeRides++;}
    stop(): void { this.activeRides--; }
}

let uber1 = new Ride();
uber1.start()

let uber2 = new Ride();
uber2.start();

console.log(uber1.activeRides) // returns 1
console.log(uber2.activeRides) // returns 2