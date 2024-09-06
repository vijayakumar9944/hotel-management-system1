const mongoose = require("mongoose");

const url= "mongodb+srv://muthuvijayakumar2001:vijayakumar@cluster0.f7a11.mongodb.net/login-system?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async ()=>{
    try{
        const con = await mongoose.connect(url);
        console.log(`MongoDB connected: ${con.connection.host}`);
        
    }
    catch(error){
         console.log(error);
         
    }
};

module.exports =connectDB
