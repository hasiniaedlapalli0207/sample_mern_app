let express=require("express");
let router=express.Router();
let {users}=require('../models/users');
router.get("/viewemployees",async(req,res)=>{
    let result = await users.find();
    res.send(result);

});
router.post("/assign-task",(req,res)=>{
    res.send("assign task route");

});
router.put("/viewtasks",(req,res)=>{
    res.send("view tasks route");

});
router.delete("/deleteEmp",(req,res)=>{
    res.send("delete employees route");

});

module.exports=router;
