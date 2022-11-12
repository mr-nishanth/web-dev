"use strict";
class User {
    constructor(email, name) {
        //#name: string (# is coming form JS world , private is coming form TS world) 
        // city: string = ""
        // readonly city: string = "Erode"
        this.city = "Erode";
        this.email = email;
        this.name = name;
    }
}
// const nis = new User(email:"n@n.com",name:"nisha")
const nis = new User("n@n.com", "nisha");
nis.city;
//  Another Methods for creating class
class UserTS {
    constructor(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        this.city = "Erode";
    }
}
//  getters and setters
class UserGS {
    constructor(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        this._courseCount = 1;
        this.city = "Erode";
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    // getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    // setter
    get courseCount() {
        return this._courseCount;
    }
    // In set annotation does't have any return type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
