const express=require('express')
const mongoose=require('mongoose')
const create_fundraisemodel=require('./create_fundraiser_form-model')





const add_create_fundraise=(req,res)=>{

const photo_obj=new create_fundraisemodel({
    img:req.body.img,
    p_name:req.body.p_name,
    amount:req.body.amount,
    content:req.body.content,
    
})
photo_obj.save()
.then(
    result=>{
        console.log(result);
        res.json({
            result:'photo saved',result
        })
    }
)
.catch(
    err=>{
        res.json({
            result:'photo not saved',err
        })
    }
)
  

}
const get_create_fundraise=(req,res)=>{
    create_fundraisemodel.find()
    .then(
        result=>{
          console.log(result);
          res.json({
             getdata:result
          }) 
        }
    )
    .catch(error=>{
     res.json({
         msg:'not get photo',error
     })
  })
         
     }



     const update_create_fundraise=(req,res)=>{
        const id=mongoose.Types.ObjectId(req.params.id)
        create_fundraisemodel.findByIdAndUpdate({_id:id},{p_name:req.body.p_name,amount:req.body.amount, content:req.body.content}).exec()
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
    
    const delete_create_fundraise=(req,res)=>{
        const id=mongoose.Types.ObjectId(req.params.id)
    
        create_fundraisemodel.findByIdAndDelete({_id:id},{p_name:req.body.p_name}).exec()
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
module.exports={add_create_fundraise,get_create_fundraise,update_create_fundraise,delete_create_fundraise}
