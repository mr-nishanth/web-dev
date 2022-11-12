//special array

const user: (string | number)[] = [1, "mn"]

// order of array is matter here
const userWithTuple: [string | number] = [1, "mn"]


let rgb:[number,number,number] = [255,255,255]

rgb=[255,255,255,.5]

type User = [number,string]

const newUser:User = [25,"gmail@google.com"]

// override number 
newUser[1] = "gmail@google.com"
newUser.push(true)
export { }