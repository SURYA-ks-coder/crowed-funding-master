// const express=require('express')
// const mongoose=require('mongoose')
// const photomodel=require('./photos_save_model')
// const multer=require('multer')
// const fs= require('fs')
// const path=require('path')
// const patient_model = require('../Patient_Deatils/patient_information_model')

// const get_photo_p_name=(req,res)=>{
//     photomodel.find()
//     .then(
//         result=>{
//           console.log(result);
//           res.json({
//              getdata:result
//           }) 

          
//             patient_model.findOne({p_name:req.body.p_name}).exec()
//             .then(result=>{
//                 res.json({
//                     result:result
//                 })
//             })
//             .catch(error=>{
//                 res.json({
//                     msg:'not find patient',error
//                 })
//             })
        
//         }
//     )
//     .catch(error=>{
//      res.json({
//          msg:'not get photo',error
//      })
//   })
         
//      }


//      module.exports={get_photo_p_name}