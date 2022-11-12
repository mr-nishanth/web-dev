// 
type UserT = {
    email: string;
    userId: number;
}

interface UserI {
    readonly _id: number,
    email: string,
    userId: number,

    googleId?: string,

    // startTrail: () => string

    startTrail(): string

    getCoupon(couponName: string): number
}

let nisha: UserI = {
    _id: 1223,
    email: "n@n.com",
    userId: 25,

    //    startTrail() {
    //     return "Trail Started"
    // },

    startTrail: () => {
        return "Trail Period started"
    },

    // getCoupon(couponName) {
    //     return 399
    // },

    getCoupon(name: "nisha10") {
        return 399
    },


}



export { }