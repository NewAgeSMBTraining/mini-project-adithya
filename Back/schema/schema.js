const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
       
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    degree:{
        type:String,
       
    },
    hse:{
        type:String,
        
    },
    sslc:{
        type:String,
       
    },
    dob:{
        type:String,
      
    },
    mobile:{
        type:String,
       
    },
    work_exp_in_months:{
        type:String,
        
    },
})


module.exports= mongoose.model('userData',userSchema);