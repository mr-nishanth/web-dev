"use strict";
class User {
    constructor(email, name) {
        // city: string = ""
        this.city = "Erode";
        this.email = email;
        this.name = name;
    }
}
// const nis = new User(email:"n@n.com",name:"nisha")
const nis = new User("n@n.com", "nisha");
nis.city;
