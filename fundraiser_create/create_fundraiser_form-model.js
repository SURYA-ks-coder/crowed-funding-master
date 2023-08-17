const mongoose=require('mongoose')
const create_fundraiseSchema=mongoose.Schema({
    img:String, 
    p_name:String,
    amount:Number,
    content:String,
    
})

const create_fundraisemodel=mongoose.model('create_fundraise',create_fundraiseSchema)
module.exports=create_fundraisemodel