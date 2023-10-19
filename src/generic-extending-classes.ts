interface Product {
    name: string,
    price: number;
}

class Store<T> {
    protected _objects: T[] = [];
    
    add(obj:T): void {
        this._objects.push(obj);
    }
}

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
    compress():void{};
}

// Restrict the generic type parameter
class SearchableStore<T extends {name: string}> extends Store<T> {
    find(name:string):T | undefined {
        // in order to use obj.name, we need to define 'extends {name: string}'
        return this._objects.find(obj => obj.name === name); 
    }
}

// Fixing the generic typ parameter
class ProductStore extends Store<Product>{
    filterByCategoy(category: string): Product[]{
        console.log(category);
        return [];
    }
}