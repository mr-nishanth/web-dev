function addTwo(num) {
    return num + 2
}
addTwo(5)
addTwo("3")



function addTwoWithType(num: number): number {
    return num + 2
}
addTwoWithType(5)
addTwoWithType("3")

function signUpUser(name: string, email: string, isPaid: boolean) {

}
signUpUser()

signUpUser("Nishanth", "nishanth@gmail.com", false)

let loginUser = (name: string, email: string, isPaid: boolean) => {

}

loginUser("n","n@n")

let loginUserWithDefaultValue = (name: string, email: string, isPaid: boolean=false) => {

}
loginUserWithDefaultValue("n","n@n")
export { }