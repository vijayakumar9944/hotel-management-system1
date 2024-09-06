const router = require("express").Router();
const bcrypt =require("bcrypt");
const User = require("../models/User");
const nodemailer =require ("nodemailer");
const jwt =require ("jsonwebtoken");
const verifyToken = require("../middlewares/verify");

const email = "muthuvijayakumar2001@gmail.com";
const pwd = "kekzvojecdeffjlm"

router.get("/",(req,res)=>
{
    res.send("User route is working");
});

router.post("/signup",async(req,res)=>{
    try{
        const salt =await bcrypt.genSalt(10);
        const password =await bcrypt.hash(req.body.password,salt);
        const user =new User({
            name:req.body.name,
            email:req.body.email,
            password,
        });
         const data =await user.save();
         const token =jwt.sign({id:data._id},"secret");
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:email,
                pass:pwd,
            },
        });
        let info =await transporter.sendMail({
            from: "Hotel management System <muthuvijayakumar2001@gmail.com>",
            to:req.body.email,
            subject:"Verify your email-Hotel management system",
            html:`
           <div>
               <strong> ${req.body.name}</strong>,We welcome to our platform.
               <a style="background-color:green;color:white" href ="http://localhost:3000/verify/${token}"> Verify Email</a>
               <div>
               <p>Thanks and Regards</p>
               <p>From Hotel management system</p>
               </div>
               </div>`,


        });
        console.log(info);
        res.json({msg:"signed up success fully"});
        
    }catch(error){
        res.json({msg:error.message})
    }
});
router.post("/login",async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(user){
if(user.verified){
const result = await bcrypt.compare(req.body.password,user.password);
if(result){
 const token = jwt.sign({id:user._id},"secret");
 return res.json(token);
}
 else{
    return res.send({msg:"wrong password"});
    }
}
else{
    return res.send({msg:"please get your account verified"});
}
        }
        else{
            return res.send({msg:"No user found"});
        }
    } catch (error) {
        return res.send({msg:error.message});
    }
    
    });

router.get("/verify/:token",async(req,res)=>{
    try{
        const token =req.params.token;
       
        
        jwt.verify(token,"secret",async(err,decoded)=>{
            if(err){
                return res.json({msg:"invalid url"});
            }
            else{
                console.log(decoded);
                
            await User.findByIdAndUpdate(decoded.id,{verified:true});
                return res.json({msg:"Account verified"});
            }
        })
    }
    catch(error){
        return res.json({msg:error.message})
    }
});
router.get("/data",verifyToken,async(req,res)=>{
    try {
        const userId =res.userId;
        const user = await User.findById(userId).select("-passsword");
        res.json(user);

    } catch (error) {
     return res.json({msg:error.message})   ;
    }
})



module.exports = router;