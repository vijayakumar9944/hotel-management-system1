const mongoose = require("mongoose")

 const UsersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    age:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    mobileno:{
        type:Number,
        required:true,
    },
    aadharno:{
        type:Number,
        required:true,
    },

 },
 {timestamps:true}
);

const Users = mongoose.model("user-datas",UsersSchema);

module.exports = Users;