const mongoose=require('mongoose')

const bank_deatils_Schema=mongoose.Schema({
    'amount':Number,
    'mobile_number':Number,
    'p_name':String,
    'ac_number':{
        type:Number,
        require:true
    },
    'confirom_ac_number':Number,
    'ifsc_code':String,
    'branch':String,
     'p_id':String
})

const bank_deatils_model=mongoose.model('bank_deatils',bank_deatils_Schema)
module.exports=bank_deatils_model