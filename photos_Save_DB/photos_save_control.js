const express=require('express')
const mongoose=require('mongoose')
const photomodel=require('./photos_save_model')
const multer=require('multer')
const fs= require('fs')
const path=require('path')



const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        // console.log( path.extname(file.originalname));
        // console.log( file);

        cb(null, Date.now() + path.extname(file.originalname))}
})

let upload = multer({ storage: storage}).single('photo');
const add_photo=(req,res)=>{

var x="http://localhost:4000/"
const photo_obj=new photomodel({
    img:x+req.file.path,
    full_name:req.body.full_name,
    p_name:req.body.p_name,
    health_issue:req.body.health_issue,
    hospital_name:req.body.hospital_name,
    city:req.body.city,
    goal_amount:req.body.goal_amount

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

const get_photo=(req,res)=>{
  photomodel.find()
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


  
const update_photo=(req,res)=>{
    const id=mongoose.Types.ObjectId(req.params.id)

    photomodel.findByIdAndUpdate({_id:id},{p_name:req.body.p_name,health_issue:req.body.health_issue,
    hospital_name:req.body.hospital_name,city:req.body.city,}).exec()
    .then(result=>{
        res.json({
            result:'Update Successfuly',result
        })
    })
    .catch(error=>{
        res.json({
            msg:'could not upadte patient',error
        })
    })
}

const delete_photo=(req,res)=>{
    const id=mongoose.Types.ObjectId(req.params.id)

    photomodel.findByIdAndDelete({_id:id},{p_name:req.body.p_name}).exec()
    .then(result=>{
        res.json({
            result:'Delete Successfuly'
        })
    })
    .catch(error=>{
        res.json({
            msg:'could not delete patient',error
        })
    })
}


module.exports={add_photo,get_photo,update_photo,delete_photo,upload}