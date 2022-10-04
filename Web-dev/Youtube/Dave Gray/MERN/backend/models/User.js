const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    roles:[
        {
            type:String,
            default:"Employee",
        },
    ],
    active:
        {
            type:Boolean,
            default:true,
        },
    
})

// why roles have array , because they have multiple roles like employee , admin and manager

module.exports = mongoose.model("User",userSchema)