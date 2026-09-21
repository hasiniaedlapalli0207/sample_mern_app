

let express=require("express");
let app=express();
let hrroutes=require('./routes/hr_route');
let emproute=require('./routes/emp_route');
let mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/hrmanagement")
.then(()=>{
    console.log("connected with mongodb database")
}).catch((err )=>{
    console.log(err);
})


app.use(express.json());
app.use("/api/hr",hrroutes);
app.use("/api/emp",emproute);



//run the Server
app.listen(3000,()=>{
    console.log("server listenig on port 3000")
})


