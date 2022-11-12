
function addTwo(num: number) {
    return "Hello"
}
addTwo()




function addTwo(num: number): number {
    return "Hello"
}
addTwo()



// create more then one type
function getValue(myVal: number) {
    if (myVal > 5) {
        return false
    }
    return "200 OK"
}

const getHello = (s: string): string => {
    return "osm"
}

const heros = ["thor", "spiderman", "ironman"]

heros.map((hero: string): string => {
    return `Hero is ${hero}`
})

// Best
heros.map((hero): string => {
    return `Hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg)
}

consoleError()


// Error 
// THe never type represents values which are never observed .
// In a return type , this means that the function  throws an exception or terminates execution of the program

// never also appears when TypeScript determines there's nothing left in a union
function consoleErrorNever(errmsg: string): never {
    throw new Error(errmsg)
}

consoleErrorNever("1")

export { }