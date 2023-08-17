const express=require('express')
const mongoose=require('mongoose')
const fundraiser_model=require('./start_a_fundraise_model')
const bcrypt=require('bcrypt')

const saltrounds=10
const admindata={
    "e_mail":"suryaks403@gmail.com",
    "password":"surya401"
  }
  
const add_fundraiser=(req,res)=>{
    
    const password=req.body.password
    const hash=bcrypt.hashSync(password,saltrounds)
    const fundraiser_obj=new fundraiser_model({
        'fundraise_for':req.body.fundraise_for,
        'full_name':req.body.full_name,
        'e_mail':req.body.e_mail,
        'mobile_number':req.body.mobile_number,
        'password':hash,
        'i_agree':req.body.i_agree
    })
    fundraiser_obj.save()
    .then(
        result=>{
            res.json({
                result:result
                
            })
            console.log('Then Worked',result);
        }
    )
    .catch(
        error=>{
            res.json({
                msg:'fails to save',error
            })
            console.log('Catch Worked',error);

        }
    )
}



const login=(req,res)=>{
    // console.log(res);
    
    fundraiser_model.findOne({e_mail:req.body.e_mail}).exec()
    .then(result=>{
        // console.log(response);
        const password=req.body.password
        const compare=bcrypt.compare(password,result.password,(err,result)=>{

            if(result){
                res.json({
                    msg:'Login Success'
                
                })
            }
         
            else{
                console.log('error');

                res.json({
                    msg:'Password Incorrect..!'
                })
                
            }
        })
    }
        )
    .catch(error=>{
        
        res.json({
            msg:'Fundraiser Not Found..!'
        })
    })

}

const get_fundraiseer=(req,res)=>{
       fundraiser_model.find()
       .then(
           result=>{
             res.json({
                getdata:result
             }) 
           }
       )
       .catch(error=>{
        res.json({
            msg:'not get fundraiser',error
        })
    })
            
        }


    const find_fundraiser=(req,res)=>{
        fundraiser_model.findOne({full_name:req.body.full_name}).exec()
        .then(result=>{
            res.json({
                result:result
            })
        })
        .catch(error=>{
            res.json({
                msg:'not find fundraiser',error
            })
        })
    }


    const update_fundraiser=(req,res)=>{
        console.log(req.params);
        const id=mongoose.Types.ObjectId(req.params.id)
        fundraiser_model.findByIdAndUpdate({_id:id},{ full_name:req.body.full_name, e_mail:req.body.e_mail, mobile_number:req.body.mobile_number, }).exec()
        .then(result=>{
            console.log(result);
            res.json({
                result:'Update Successfuly',result
            })
        })
        .catch(error=>{
            res.json({
                result:'could not upadte fundraiser',error
            })
        })
    }

    const delete_fundraiser=(req,res)=>{
        const id=mongoose.Types.ObjectId(req.params.id)

        fundraiser_model.findByIdAndDelete({_id:id},{ full_name:req.body.full_name }).exec()
        .then(result=>{
            res.json({
                result:'Delete Successfuly'
            })
        })
        .catch(error=>{
            res.json({
                msg:'could not delete fundraiser',error
            })
        })
    }


    


module.exports={add_fundraiser,find_fundraiser,update_fundraiser,delete_fundraiser,login,get_fundraiseer}