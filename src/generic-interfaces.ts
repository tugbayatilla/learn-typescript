// http://mywebsite.com/users
// http://mywebsite.com/products

interface Result<T> {
    data: T | null; 
    error: string | null
}

function fetch<T>(url: string): Result<T> {
    console.log(url)
    return { data: null, error: null }
}

interface User {
    username: string;
}

interface Product {
    title: string;
}

let resultUser = fetch<User>('user url');
console.log(resultUser);

let resultProduct = fetch<Product>('product url');
console.log(resultProduct);
