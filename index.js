

let express=require("express");
let app=express();
let hrroutes=require('./routes/hr_route');
let emproute=require('./routes/emp_route');
app.use("/api/hr",hrroutes);
app.use("/api/emp",emproute);



//run the Server
app.listen(3000,()=>{
    console.log("server listenig on port 3000")
})


