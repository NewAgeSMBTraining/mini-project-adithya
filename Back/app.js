const express= require('express')
const mongoose=require('mongoose')
const url ='mongodb://localhost:27017/register'
const app =express()
const cors = require('cors')
const dotenv= require("dotenv")

// mongoose connect
mongoose.connect(url)

//to view json
app.use(express.json())

//dotenv
dotenv.config()

//cors
app.use(cors())

//USER
const routejs= require('./routers/route')
app.use('/route',routejs)


//LEAVES
const leaveRoutejs=require('./routers/leaveRoute')
app.use('/leave',leaveRoutejs)

//port setup
 app.listen(4000,()=>{
     console.log("Database connected")
 })




