const express= require ("express");
const app= express();
const cors = require('cors');
app.use(express.json());
const enrollmentData=require("../model/enrollmentdata");
const trainerdata=require("../model/trainerdata.js");
const multer = require('multer');
const ImageDataURI = require('image-data-uri');
const jwt = require ("jsonwebtoken");
const path= require("path");

app.use(express.json({ limit: '50mb'}));


app.use(express.static('public'));
// const { request } = require("http");
app.use(cors());

//save image
var storage = multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, './public/images/requests')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  });


//save enrollment details
app.post('/enroll',function (req, res) {
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    
    var upload = multer({ storage: storage }).single('image');
    upload(req, res, (err) => {
  
      if (err) {
        console.log(err);
      }
      else {
        if (req.file) {
    var trainerDetails = {
        trainerName:req.body.trainerName,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        skill:req.body.skill,
        qualification:req.body.qualification,
        companyName:req.body.companyName,
        designation:req.body.designation,
        course:req.body.course, 
        image:req.file.filename
    }
}
else {
    trainerDetails = {
        trainerName:req.body.trainerName,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        skill:req.body.skill,
        qualification:req.body.qualification,
        companyName:req.body.companyName,
        designation:req.body.designation,
        course:req.body.course,
        image:''
       
    }
    
  console.log("error in saving the image")
}
    console.log("email-"+trainerDetails.email);
    console.log("name--"+trainerDetails.trainerName);
    console.log("address--"+trainerDetails.address)
    console.log("img--"+trainerDetails.image)
    var enrollmentdata = new enrollmentData(trainerDetails);
    enrollmentdata.save();
      }
    })
});


app.get('/getTrainerData',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    enrollmentData.find().then((enrollmentdata)=>{
        res.send(enrollmentdata)
    })
});


app.get("/:id",  (req, res) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
   

       const id = req.params.id;
       trainerdata.find({email: id}).then((data)=>{
        res.send(data);
        console.log(data);
        });
  })



//Trainer Profile Edit page get data
app.get('/trainereditprofile/:id', function (req, res) {

    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
    token = req.params.id;
    payload = jwt.verify(token, 'secretkey');
    console.log(payload.subject)
    trainerdata.findOne({ "email": payload.subject })
      .then(function (data) {
        console.log("dataa="+data)
        res.send(data);
      });
  });

//Trainer ProfileEdit page update data
  app.put("/traineredit" , (req,res)=>{

    console.log(req.body.data)

    id=req.body.data._id,
    trainerName=req.body.data.trainerName,
    email=req.body.data.email,
    phone=req.body.data.phone,
    address=req.body.data.address,
    skill=req.body.data.skill,
    qualification=req.body.data.qualification,
    companyName=req.body.data.companyName,
    designation=req.body.data.designation,
    course=req.body.data.course,
    image=req.body.data.image,
    typeOfEmp=req.body.data.typeOfEmp
   
 
     //console.log(id)

   trainerdata.findByIdAndUpdate({"_id":id},
                                    {$set:{
                                        "trainerName":trainerName,
                                        "phone":phone,
                                        "address":address,
                                        "email":email,
                                        "skill":skill,
                                        "qualification":qualification,
                                        "companyName":companyName,
                                        "designation":designation,
                                        "course":course,
                                        "image":image,
                                        "typeOfEmp":typeOfEmp
                                    }})

    .then((data)=>{
        res.send(data)
    })

});



module.exports=app;