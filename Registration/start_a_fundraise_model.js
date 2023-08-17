const mongoose=require('mongoose')

const fundraiserSchema=mongoose.Schema({
    'fundraise_for':String,
    'full_name':String,
    'e_mail':String,
    'mobile_number':Number,
    'password':String,
    'i_agree':Boolean
})

const fundraiser_model=mongoose.model('fundraiser',fundraiserSchema)

module.exports=fundraiser_model