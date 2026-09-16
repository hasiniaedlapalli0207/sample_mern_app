let express=require("express");
let router=express.Router();

router.get("/viewemployees",(req,res)=>{
    res.send("view employees route");

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
