const User = {
    name: "Nishanth",
    email: "nishanth@dev.com",
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) {

}

createUser({ name: "Nisha", isPaid: false })

function createCourse(): { name: string, price: number } {
    return { name: "Reactjs", price: 399 }
}

createCourse()


// bad syntax

function createUsers({ name: string, isPaid: boolean }) {

}

createUsers({ name: "Nisha", isPaid: false, email="n@n.com" })


let newUser = { name: "Nisha", isPaid: false, email="n@n.com" }

createUsers(newUser) // it's not show error

export { }