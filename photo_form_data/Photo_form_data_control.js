// const express=require('express')
// const mongoose=require('mongoose')
// const multer=require('multer')
// const fs= require('fs')
// const path=require('path')

// const photoform_model=require('./Photo_form_data_model')
// const { diskStorage } = require('multer')
// const storage=multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'./uploads')
//     },
//     filename:function(req,file,cb){
//         // console.log( path.extname(file.originalname));
//         console.log( file);

//         cb(null, Date.now() + path.extname(file.originalname))}
// })

// let upload = multer({ storage: storage}).single('photo');

// var x="http://localhost:4000/"

// const add_photo_form=(req,res)=>{
// console.log(diskStorage.filename);

//     const photo_form_obj= new photoform_model({
//         p_name:req.body.p_name,
//         health_issue:req.body.health_issue,
//         hospital_name:req.body.hospital_name,
//         city:req.body.city,
//         goal_amount:req.body.goal_amount,
//         photo:x+req.file.path

//     })
//     photo_form_obj.save()
// .then(
//     result=>{
//         console.log(result.photo);
//         res.json({
//             result:'photo saved',result
//         })
//     }
// )
// .catch(
//     err=>{
//         res.json({
//             result:'photo not saved',err
//         })
//     }
// )
  
// }
// module.exports={add_photo_form,upload}