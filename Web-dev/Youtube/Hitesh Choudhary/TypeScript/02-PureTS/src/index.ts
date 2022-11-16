class User {
    // default public
    public email: string

    private name: string
    //#name: string (# is coming form JS world , private is coming form TS world) 

    // city: string = ""

    // readonly city: string = "Erode"

    private readonly city: string = "Erode"

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name

    }
}

// const nis = new User(email:"n@n.com",name:"nisha")

const nis = new User("n@n.com", "nisha")
nis.city




//  Another Methods for creating class
class UserTS {
    readonly city: string = "Erode"
    constructor
        (
            public email: string,
            public name: string,
            private userID: number
        ) {

    }
}


//  getters and setters

class UserGS {

    // private _courseCount = 1

    protected _courseCount = 1

    readonly city: string = "Erode"
    constructor
        (
            public email: string,
            public name: string,
            private userID: number
        ) {

    }

    private deleteToken(){
        console.log("Token Deleted")
    }

    // getter
    get getAppleEmail():string{
        return `apple${this.email}`
    }
    // setter

    get courseCount():number{
        return this._courseCount
    }

    // In set annotation does't have any return type
    set courseCount(courseNum){
        if (courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}


class SubUser extends UserGS{
 isFamily:boolean = true;
 changeCourseCount(){
    this._courseCount = 4
 }   
}