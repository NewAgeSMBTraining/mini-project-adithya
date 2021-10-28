const mongoose= require('mongoose')

const leaveSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    reason:{
        type:String,
        required:true,
    },
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
        default:"Pending"
    },
})


module.exports= mongoose.model('userLeaves',leaveSchema)

