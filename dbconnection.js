const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/crowed_funding')
const db=mongoose.connection
db.on('error',()=>{console.log('connection err...!');})
db.once('open',()=>{console.log('connection success.....!');})
 

module.exports=db