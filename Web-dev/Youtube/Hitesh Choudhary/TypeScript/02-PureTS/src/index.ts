class User {
    email: string
    name: string
    // city: string = ""

    readonly city: string = "Erode"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name

    }
}

// const nis = new User(email:"n@n.com",name:"nisha")

const nis = new User("n@n.com", "nisha")
nis.city