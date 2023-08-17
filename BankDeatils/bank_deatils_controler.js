const express=require('express')
const mongoose=require('mongoose')

const bank_model=require('./bank_deatils_model')

const add_bank_deatils=(req,res)=>{

    const bankobj=new bank_model({
        'amount':req.body.amount,
        'mobile_number':req.body.mobile_number,
        'p_name':req.body.p_name,
        'ac_number':req.body.ac_number,
        'confirm_ac_number':req.body.confirm_ac_number,
        'ifsc_code':req.body.ifsc_code,
        'branch':req.body.branch,
        'p_id':req.body.p_id
        

    })
    bankobj.save()
    .then(
        result=>{
            console.log('bannk deatils saved');
            res.json({
                result:result
            })
        }
    )
    .catch(
        err=>{
            res.json({
                msg:'bank deatils not saved' ,err
            })
        }
    )
}


const get_bankdeatils=(req,res)=>{

   bank_model.find()
   .then(
    result=>{
        res.json({
            result:result
        })
    }
   )
   .catch(
    err=>{
        res.json({
            msg:'bank deatils not get' ,err
        })
    }
   )
}
const update_bankdeatils=(req,res)=>{
    const id=mongoose.Types.ObjectId(req.params.id)
    bank_model.findByIdAndUpdate({_id:id},{p_name:req.body.p_name,mobile_number:req.body.mobile_number,
    ac_number:req.body.ac_number,confirm_ac_number:req.body.confirm_ac_number,ifsc_code:req.body.ifsc_code,
    branch:req.body.branch}).exec()
    .then(result=>{
        res.json({
            result:'Update Successfuly',result
        })
    })
    .catch(error=>{
        res.json({
            msg:'could not upadte monthly_donate',error
        })
    })
}

const delete_bankdeatils=(req,res)=>{
    const id=mongoose.Types.ObjectId(req.params.id)

    bank_model.findByIdAndDelete({_id:id},{p_name:req.body.p_name}).exec()
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
module.exports={add_bank_deatils,get_bankdeatils,update_bankdeatils,delete_bankdeatils}