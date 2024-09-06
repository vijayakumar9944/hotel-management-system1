const jwt =require("jsonwebtoken");


function verifyToken(req,res,next){
    const token = req.headers["authorization"];
   
    if(token){
        jwt.verify(token,"secret",(err,decoded)=>{
            if(err){
                return res.json({msg:"Access denied"});
            }
            else{
                res.userId = decoded.id;
                next();
    }
});
    }else{
        return res.json({msg:"Invalid request"});
    }
}
module.exports=verifyToken;