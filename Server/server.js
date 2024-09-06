const express =require("express");
const app =express();
const cors = require("cors")
const connectDB = require("./config/db");
const userRouter = require("./routes/user");
const usersRouter=require("./routes/users")

connectDB();
app.use(cors())

app.use(express.json());

app.use("/user",userRouter);

app.use("/users",usersRouter)


app.get("/",(req,res)=>{
    res.send("get route is working");
});


app.listen(4000,()=>{
    console.log("server is up and running");
    
});