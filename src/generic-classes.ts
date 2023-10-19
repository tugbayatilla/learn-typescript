class KeyValuePair<TKey, TValue> {
    constructor(public key: TKey, public value: TValue) {
    }
}

let pair = new KeyValuePair<string, number>('tugbay', 1);
console.log(pair)