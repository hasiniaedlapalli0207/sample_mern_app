

let express=require("express");
let app=express();
let hrroutes=require('./routes/hr_route');

app.use("/api/hr",hrroutes);



//run the Server
app.listen(3000,()=>{
    console.log("server listenig on port 3000")
})


