const mongoose =  require('mongoose');
mongoose.connect("mongodb://localhost:27017/seproject",{useNewUrlParser:true})
.then(()=>{
    console.log("mongo running")
})
.catch(()=>{
    console.log("failed to connect")
})
const loginSchema = new mongoose.Schema({
 email : {
    type:String,
    required:true
 },
 password:{
    type:String,
    required:true
 }
});

const Login = mongoose.model("Login",loginSchema);
module.exports=Login;
