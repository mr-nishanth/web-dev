// Optional Chaining
class Person {
    constructor(name, address, hobbies) {
        this.name = name;
        this.address = address;
        this.hobbies = hobbies;
    }
    print() {
        console.table(this)
    }
}

function printPersonStreet(person) {
    console.log(person.address.street)
}

const nisha = new Person(
    "Nishanth M",
    {
        street: "987 cross street",
        city: "Hell",
    },
    ["Building", "Breaking"]
)

nisha.print()
printPersonStreet(nisha)


console.log("============ ❌❌❌ =================")

class PersonWrong {
    constructor(name, address, hobbies) {
        this.name = name;
        this.address = address;
        this.hobbies = hobbies;
    }
    print() {
        console.table(this)
    }
}

function printPersonStreet(person) {
    // console.log(person.address.street)

    // Method 1
    if (person && person.address) {

        console.log(person.address.street)
    }
    // Method 2
    console.log(person && person.address && person.address.street)

}

const nishaWrong = new PersonWrong(
    "Nishanth M",
    undefined,
    ["Building", "Breaking"]
)

nishaWrong.print()
printPersonStreet(nishaWrong)
console.log("")
printPersonStreet(undefined)



console.log("============ ✅✅✅ =================")


class PersonCorrect {
    constructor(name, address, hobbies) {
        this.name = name;
        this.address = address;
        this.hobbies = hobbies;
    }
    print() {
        console.table(this)
    }
}

function printPersonStreet(person) {
    /*
        person?
        if the person is exist then move next
        person?.address?
        we know that the person is exist then, if address is exist then move next

        In these check incase it encounter an undefined its return undefined
     */
    console.log(person?.address?.street)
}

const nishaCorrect = new PersonCorrect(
    "Nishanth M",
    // undefined,
    { street: "Street is exist" },
    ["Building", "Breaking"]
)

nishaCorrect.print()

// Optional Chaining in Function
printPersonStreet(nishaCorrect)
// nishaCorrect.printName()
/*
    nishaCorrect.printName?
    it's check printName exist 

    nishaCorrect.printName?.()
    and printName was function 

    if the printName is exist and as well as its function called else not called , returns undefined or nothing
*/
nishaCorrect.printName?.()

// Optional Chaining in Array
console.log("========= Optional Chaining in Array =========")
const nishaCorrectArray = new PersonCorrect(
    "Nishanth M",
    { street: "Street is exist" },
    // undefined,
    ["Building", "Breaking"]

)

// nishaCorrectArray.hobbies[0]
// console.log(nishaCorrectArray.hobbies[0])
console.log(nishaCorrectArray.hobbies?.[0])
console.log(nishaCorrectArray.hobbies?.[0].toUpperCase())