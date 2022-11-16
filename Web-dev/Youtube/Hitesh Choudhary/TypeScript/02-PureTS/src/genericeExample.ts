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


// Part 3

function anotherFunction<T, U>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, "4")

function anotherFunctionNumber<T, U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunctionNumber(3, "4")

interface Database {
    connection: string,
    username: string,
    password: string
}

function DBConnection<T, U extends Database>(v1: T, db: U): object {
    return {
        v1, db
    }
}
DBConnection(6, {})

interface Quiz {
    name: string,
    type: string,
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}

export { }