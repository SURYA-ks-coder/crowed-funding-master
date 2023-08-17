const express=require('express')
const mongoose=require('mongoose')
const monthly_donate_model = require('./monthly_donate_model')

const add_monthly_donate=(req,res)=>{
  const monthly_donate_obj=  new monthly_donate_model({
    // 'type_of_money':req.body.type_of_money,
    amount:req.body.amount,
    full_name:req.body.full_name,
    mobile_number:req.body.mobile_number,
    e_mail:req.body.e_mail,
    ac_number:req.body.ac_number,
    ifsc_code:req.body.ifsc_code

})
monthly_donate_obj.save()
.then(result=>{
    res.json({
        result:result
    })
})
.catch(
    error=>{
        res.json({
            msg:'fails to save',error
        })
    })
}


const get_monthly_donate=(req,res)=>{
    monthly_donate_model.find()
    .then(
        result=>{
          res.json({
             getdata:result
          }) 
        }
    )
    .catch(error=>{
     res.json({
         msg:'not get monthly_donate',error
     })
 })
         
     }



const find_monthly_donate=(req,res)=>{
    monthly_donate_model.findOne({full_name:req.body.full_name}).exec()
    .then(result=>{
        res.json({
            result:result
        })
    })
    .catch(error=>{
        res.json({
            msg:'not find monthly_donate',error
        })
    })
}


const update_monthly_donate=(req,res)=>{
    const id=mongoose.Types.ObjectId(req.params.id)
    monthly_donate_model.findByIdAndUpdate({_id:id},{full_name:req.body.full_name,mobile_number:req.body.mobile_number,
    e_mail:req.body.e_mail
}).exec()
    .then(result=>{
        res.json({
            result:'Update Successfuly'
        })
    })
    .catch(error=>{
        res.json({
            msg:'could not upadte monthly_donate',error
        })
    })
}

const delete_monthly_donate=(req,res)=>{
    const id=mongoose.Types.ObjectId(req.params.id)

    monthly_donate_model.findByIdAndDelete({_id:id},{full_name:req.body.full_name}).exec()
    .then(result=>{
        res.json({
            result:'Delete Successfuly'
        })
    })
    .catch(error=>{
        res.json({
            msg:'could not delete monthly_donate',error
        })
    })
}

module.exports={add_monthly_donate,find_monthly_donate,update_monthly_donate,delete_monthly_donate,get_monthly_donate}