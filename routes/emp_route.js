let express=require("express");
let router=express.Router();

router.post("/register",(req,res)=>{
    res.send("register route");

});
router.post("/login",(req,res)=>{
    res.send("login route");

});
router.get("/viewtasks",(req,res)=>{
    res.send("view tasks route");

});
router.put("/updateStatus",(req,res)=>{
    res.send("update status  route");

});

module.exports=router;