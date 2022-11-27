// Object shorthand

const name = "nisha"
const hobbies = "coding"

const nisha = {
    name: name,
    hobbies: hobbies,
}

console.table(nisha)


console.log("============ ❌❌❌ =================")
/*
    if the key and variable are same then just use the variable name
*/
const nishaW = {
    name: name,
    hobbies: hobbies,
}

console.table(nishaW)

console.log("============ ✅✅✅ =================")
const nishaC = {
    name,
    hobbies,
}

console.table(nishaC)