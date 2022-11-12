type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: User) {

}

createUser()

createUser({ name: "", email: "", isActive: false })

function createUserReturn(user: User): User {
    return { name: "", email: "", isActive: false }
}

createUserReturn({ name: "", email: "", isActive: false })

export { }