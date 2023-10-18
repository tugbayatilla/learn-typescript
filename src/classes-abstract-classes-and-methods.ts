abstract class Shape { // abstract has no representation in javascript, only in typescript
    protected constructor(public color: string) {
    }
    abstract render():void; // abstract method can only be used in abstract class
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }
    
    override render(): void {
        console.log('rendering a circle');
    }
}
