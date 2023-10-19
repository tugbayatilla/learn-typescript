interface Product2 {
    name: string,
    price: number;
}


class Store2<T> {
    protected _objects: T[] = [];

    add(obj:T): void {
        this._objects.push(obj);
    }
    
    // T is Product
    // keyof T => 'name' | 'price' 
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value);
    }
}

let store = new Store2<Product2>()
store.add({name: 'a', price: 1});
store.find('name', 'a'); // ok
store.find('price', 1); // ok
//store.find('not existing property', 'a'); // error


