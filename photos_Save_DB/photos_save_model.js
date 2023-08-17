const mongoose=require('mongoose')
const photoSchema=mongoose.Schema({
    img:{
        type:String,
        required:true,
        
    },
    full_name:String,
    p_name:String,
    health_issue:String,
    hospital_name:String,
    city:String,
    goal_amount:String
})

const photomodel=mongoose.model('uploads',photoSchema)
module.exports=photomodel