function wrapInArray<T>(value: T): T[] {
    return [value]
}

class ArrayUtils {
    static wrapInArray<T>(value: T): T[] {
        return [value]
    }
}

console.log(ArrayUtils.wrapInArray(1))
console.log(ArrayUtils.wrapInArray('test'))
console.log(wrapInArray([1]))