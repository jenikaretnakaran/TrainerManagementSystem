const express = require('express')
const router = express.Router();
const jwt = require ("jsonwebtoken")


adminemail = "admin@gmail.com";
adminpass = "admin@12345";

const userdata = require("../model/userdata");

router.post("/signup" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

  var user = req.body.data;
  console.log(user);

  userdata.findOne({email:user.email.trim()})
  .then((data)=>{
    if(data===null){

        var adduser = {
            email:user.email,
            username:user.username,
            password:user.password,
            rej:"false",
        }

        var adduser = new userdata(adduser);
        adduser.save();
        res.send({ status: true, data: 'Success' })
    }
    else{
        console.log("Email already taken")
        res.send({ status: false, data: 'Email already taken' })
    }
  })

});


router.post("/adminlogin" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

  var admin = req.body.data;
  console.log(admin);
  console.log(adminemail , adminpass)

  if((admin.email===adminemail)&&(admin.password===adminpass)){
     let payload = {subject:admin.email+admin.password};
     let tokens = jwt.sign(payload , "hiddenkey")
     res.send({status: true , tokens , data: 'Success'})
  }else if ((admin.email===adminemail)&&(admin.password!==adminpass)){
    res.send({status: false , data: 'Incorrect Password' })
  }else if ((admin.email!==adminemail)&&(admin.password==adminpass)){
    res.send({status: false , data: 'Incorrect Email' })
  }else{
    res.send({status: false , data: 'Incorrect Email and Password'})
  }

});


router.post("/trainerlogin" , (req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

  var trainer =req.body.data
  console.log(trainer);

  userdata.findOne({email:trainer.email.trim() , password:trainer.password})
  .then((data)=>{
    //console.log(data.id); 
    if(data===null){
        res.send({ status: false, data: 'Invalid Username and Password'})
    }else if((data.email===trainer.email)&&(data.password===trainer.password)){
        let payload = {subject:data.email};
        let token = jwt.sign(payload , "secretkey")
        var email = data.email;
        res.send({ status: true, data: 'Success', email , token})
    }else{
        res.send({ status: false, data: 'Incorrect Username or Password'})
    }

  });
});



module.exports=router;