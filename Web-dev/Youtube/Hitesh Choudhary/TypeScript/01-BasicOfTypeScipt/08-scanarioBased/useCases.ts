type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    
    // optional
    credcardDetails?:number
}

// function createUser(u:USer){}

let myUser: User = {
    _id: "1234567890poiuytrsa.bvcfghklnds",
    name: "Nishanth",
    email: "nisha@nisha.com",
    isActive: false
}

myUser.isActive = true
myUser._id = "89hcavsavas"


// 

type cardNumber = {
    cardnumber:string;
}
type cardDate = {
    cardDate:string
}

// Combining the type
type cardDetails = cardNumber & cardDate & {
    cvv:number
}


