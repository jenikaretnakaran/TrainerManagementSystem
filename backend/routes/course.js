const express = require('express')
const router = express.Router();

const coursedata = require("../model/coursedata")

router.get("/course" , (req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
   
     coursedata.find()
     .then((data)=>{
      res.send(data)
     });
   
   });



module.exports=router;