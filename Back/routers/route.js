require('dotenv').config()
const express= require('express')
const app = express()
const schema = require('../schema/schema')
const bcrypt= require('bcrypt')
const jwt=require('jsonwebtoken')
const nodemailer= require('nodemailer')



// Registration GET & POST

app.get('/', checkToken, (req, res) => {
    
    jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET,async (err, authorizedData) => {
        if(err){
            
            console.log('ERROR: Could not connect to the protected route');
            res.sendStatus(403);
        } else {
            
            const schem= await schema.find()
            res.json(schem)
         
        }
    })
});



app.post('/',async(req,res)=>{
    
    const alien = new schema({
        name: req.body.name,
        gender:req.body.gender,
        email:req.body.email,
        password: await bcrypt.hash(req.body.password,10),
        degree:req.body.degree,
        hse:req.body.hse,
        sslc:req.body.sslc,
        dob: req.body.dob,
        mobile:req.body.mobile,
        work_exp_in_months:req.body.work_exp_in_months
        
    })
    try {
        //nodemailer
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
       user: process.env.adminEmail,
       pass: process.env.adminPassword,
    },
 });

 var mailOptions = {
    from: process.env.myEmail,
    to: req.body.email,
    subject: "Registration Completed // sending Username and Password",
    text: `Hi, ${req.body.name}, \n
              Your Registration Completed. \n
              USERNAME: ${req.body.email}\n
              PASSWORD: ${req.body.password} \n\n Thank you`,
 };
 transporter.sendMail(mailOptions)
      const a1= await alien.save()
      res.json(a1)
    } catch (error) {
        console.log(error)
    }
})



//Delete by ID

app.delete('/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
        const id=await schema.findByIdAndRemove(req.params.id)
        res.json(id)
        

    }catch(err){
        res.send(err)
    }
})


//Update by ID

app.put('/:id',async(req,res)=>{
    try{
        const id=await schema.findByIdAndUpdate(req.params.id, req.body)
        res.json(id)

    }catch(err){
        res.send(err)
    }
})

// Forgot Pass

app.put('/forgot/pass',async(req,res)=>{
    try{
        const hashPass=await bcrypt.hash(req.body.password,10)
        const id=await schema.findOneAndUpdate({email:req.body.email}&&{name:req.body.name},{password:hashPass})
        res.json(id)
    }catch(err){
        res.send(err)
    }
})


//Get by ID
app.get('/:id',async(req,res)=>{
    try{
        const id=await schema.findById(req.params.id,)
        res.json(id)

    }catch(err){
        res.send(err)
    }
})


//LOGIN check
app.post('/login',async(req,res)=>{
  try {
      const email=req.body.email
      const logindata= await schema.findOne({email:req.body.email})
      console.log(logindata)
      const check= await bcrypt.compare(req.body.password,logindata.password)
       console.log(check)
      if(check){
          console.log("get password")
          const accessToken=jwt.sign(check,process.env.ACCESS_TOKEN_SECRET)
          console.log(accessToken)
          return res.status(201).json({mess:"Success",status:check,accessToken:accessToken,value:logindata})
      }
      else{  
            return res.status(400).json({message:"Cannot find user"})
      }
      
  } catch (error) {
      console.log(error)
  }
})


//Auth function
function checkToken (req, res, next) {
    const header = req.headers['authorization'];
    console.log(header)

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        res.sendStatus(403)
    }
}



module.exports=app