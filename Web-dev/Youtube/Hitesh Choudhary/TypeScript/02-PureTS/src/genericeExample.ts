// Generics

const score: Array<number> = []
const name: Array<string> = []


function identityOne(val: number | boolean): number | boolean {
    return val
}


function identityTwo(val: any): any {
    return val
}


// Generics
function identity<Type>(val: Type): Type {
    return val
}

identity(3)
identity("3")
identity(true)



function identityShortHand<T>(val: T): T {
    return val
}


interface Bootle {
    brand: string,
    type: number
}

function ownGenerics<Bootle>(val: Bootle): Bootle {
    return val
}


// Part 2
// Generics Array[]
function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}



const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}
export { }