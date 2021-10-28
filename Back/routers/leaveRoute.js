require('dotenv').config()
const express=require('express')
const app=express()
const leaveSchema= require('../schema/leaveSchema')
const jwt=require('jsonwebtoken')


// Leaves GET & POST

app.get('/',async(req,res)=>{
    try{
        const schem=await leaveSchema.find()
        res.json(schem)

    }catch(err){
        res.send(err)
    }
})

app.post('/',async(req,res)=>{
    const alien = new leaveSchema({
        name: req.body.name,
        reason:req.body.reason,
        from:req.body.from,
        to: req.body.to,
        status:req.body.status
    })
    try {
      const a1= await alien.save()
      res.json(a1)
    } catch (error) {
        console.log(error)
    }
})

//Change STATUS

app.put('/:id',async(req,res)=>{
    const stat = await leaveSchema.findById(req.params.id)
    stat.status=req.body.status
    const a1= await stat.save()
    res.json(a1)

})

// Status Update by ID

app.put('/:id',async(req,res)=>{
    try{
        const id=await schema.findByIdAndUpdate(req.params.id, req.body)
        res.json(id)

    }catch(err){
        res.send(err)
    }
})


//Get by ID
app.get('/:id',async(req,res)=>{
    try{
        const id=await leaveSchema.findById(req.params.id)
        res.json(id)

    }catch(err){
        res.send(err)
    }
})





module.exports=app