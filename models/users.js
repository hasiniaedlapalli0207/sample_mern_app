let mongoose=require('mongoose');
let userschema=mongoose.Schema({
    name:String,
    type:String,
    enum:["HR","EMPLOYEE"]
})

let users=mongoose.model('users',userschema);
module.exports={users}
