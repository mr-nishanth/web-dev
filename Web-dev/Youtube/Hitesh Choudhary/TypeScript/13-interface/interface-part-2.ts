// reopening interface

interface UserI {
    readonly _id: number,
    email: string,
    userId: number,

    googleId?: string,

    startTrail(): string
    getCoupon(couponName: string,value:number): number
}

interface UserI{
    githubToken:string
}



let nisha: UserI = {
    _id: 1223,
    email: "n@n.com",
    userId: 25,
    githubToken:"mtymrne23t2",

    startTrail: () => {
        return "Trail Period started"
    },
    getCoupon(name: "nisha10",off=10) {
        return 399
    },
}

// inheritance
// interface Admin extends UserI , Another
interface Admin extends UserI {
    role:"admin" | "ta" | "learner"

}

let admin: Admin = {
    role:"admin"
    _id: 1223,
    email: "n@n.com",
    userId: 25,
    githubToken:"mtymrne23t2",


    startTrail: () => {
        return "Trail Period started"
    },
    getCoupon(name: "nisha10",off=10) {
        return 399
    },
}


// Note read Type Aliases and Interface



