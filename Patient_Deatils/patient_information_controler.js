// const express=require('express')
// const mongoose=require('mongoose')
// const patient_model = require('./patient_information_model')



// const add_patient=(req,res)=>{
//     const patient_obj=new patient_model({
        
//         'p_name':req.body.p_name,
//         'health_issue':req.body.health_issue,
//         'hospital_name':req.body.hospital_name,
//         'city':req.body.city,
//         'goal_amount':req.body.goal_amount,
//         // 'photos':req.file
//     })
//     patient_obj.save()
//     .then(
//         result=>{
//             res.json({
//                 result:result
//             })
//         }
//     )
//     .catch(
//         error=>{
//             res.json({
//                 msg:'fails to save',error
//             })
//         }
//     )

// }


// const get_patient=(req,res)=>{
//     patient_model.find()
//     .then(
//         result=>{
//           res.json({
//              getdata:result
//           }) 
//         }
//     )
//     .catch(error=>{
//      res.json({
//          msg:'not get patient',error
//      })
//  })
         
//      }

// const find_patient=(req,res)=>{
//     patient_model.findOne({p_name:req.body.p_name}).exec()
//     .then(result=>{
//         res.json({
//             result:result
//         })
//     })
//     .catch(error=>{
//         res.json({
//             msg:'not find patient',error
//         })
//     })
// }


// const update_patient=(req,res)=>{
//     const id=mongoose.Types.ObjectId(req.params.id)

//     patient_model.findByIdAndUpdate({_id:id},{p_name:req.body.p_name,health_issue:req.body.health_issue,
//     hospital_name:req.body.hospital_name,city:req.body.city,}).exec()
//     .then(result=>{
//         res.json({
//             result:'Update Successfuly'
//         })
//     })
//     .catch(error=>{
//         res.json({
//             msg:'could not upadte patient',error
//         })
//     })
// }

// const delete_patient=(req,res)=>{
//     const id=mongoose.Types.ObjectId(req.params.id)

//     patient_model.findByIdAndDelete({_id:id},{p_name:req.body.p_name}).exec()
//     .then(result=>{
//         res.json({
//             result:'Delete Successfuly'
//         })
//     })
//     .catch(error=>{
//         res.json({
//             msg:'could not delete patient',error
//         })
//     })
// }

// module.exports={add_patient,find_patient,update_patient,delete_patient,get_patient}