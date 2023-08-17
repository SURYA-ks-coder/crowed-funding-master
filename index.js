const express=require('express')
const router=require('./router')
const bodyparser=require('body-parser')
const dbconnection=require('./dbconnection')
const cors=require('cors')
const file_upload=require('express-fileupload')



const app=express()
app.use('/uploads',express.static('uploads'))

app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use('/',router)
app.use(file_upload())



app.listen(4000,()=>{console.log('connected...!');})