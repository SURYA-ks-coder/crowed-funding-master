const mongoose=require('mongoose')

const monthly_donate_Schema=mongoose.Schema({

    type_of_money:String,
    amount:Number,
    full_name:String,
    mobile_number:Number,
    e_mail:String,
    ac_number:Number,
    ifsc_code:String
}) 

const monthly_donate_model=mongoose.model('monthly_donate',monthly_donate_Schema)
module.exports=monthly_donate_model