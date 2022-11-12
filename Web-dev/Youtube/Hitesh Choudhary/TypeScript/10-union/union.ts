// combining multiple types

let score = 33

let scoreN: number = 33

let scoreNS: number | string = 33

scoreN = "55"

scoreNS = "55"


// union

type User = {
    name: string;
    id: number;
}
type Admin = {
    username: string;
    id: number;
}

let nisha: User | Admin = {
    name: "nishanth", id: 25
}

nisha = {
    username: "nishanth",
    id: 1
}

function getDBID(id: number | string) {
    // making some API calls
    console.log(`DB id is ${id}`)
}

getDBID(3)
getDBID("3")


// ===========================
function getDBIDs(id: number | string) {

    id.toLowerCase()
}

getDBIDs(3)
getDBIDs("3")


// union narrowing

function getDBIDCheck(id: number | string) {

    if (typeof id === "string") {
        id.toLowerCase()
    }
    else {
        id + 2
    }
}


// Array
const dataN: number[] = [1, 2, 3, "4"]
const dataS: string[] = [1, 2, 3, "4"]

const dataNS: (string | number)[] = [1, 2, 3, "4"]


const dataNSB: (string | number | boolean)[] = [1, 2, 3, "4", true]


// create constant
let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"

seatAllotment = "crew"