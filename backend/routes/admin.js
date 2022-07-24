require("dotenv").config();
const express= require ("express");
const app= express();
const nodemailer=require("nodemailer");

const enrollmentdata=require("../model/enrollmentdata");
const trainerdata=require("../model/trainerdata.js");
const allocateddata=require("../model/allocateddata");

// dashboard


app.get('/getTrainers',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    trainerdata.find().then((trainers)=>{
        res.send(trainers);
    })
});

app.get('/getCount',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    var trainerCount=[];
    enrollmentdata.countDocuments().then((number)=>{
        trainerCount.push(number);
        allocateddata.countDocuments().then((number)=>{
         trainerCount.push(number);
          trainerdata.countDocuments().then((number)=>{
            trainerCount.push(number);
            res.send(trainerCount);
          })
    })    
    })  
})

app.get('/nameSearch/:name',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    let trainerName= req.params.name;
    console.log(trainerName);
    trainerdata.find({trainerName:trainerName}).then((data)=>{
        res.send(data);
      })
        
})

app.get('/skillSearch/:skill',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    let skill= req.params.skill;
    trainerdata.find({skill: skill}).then((data)=>{
        res.send(data);
    })
})

app.get('/empSearch/:emp',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    let typeOfEmp=req.params.emp;
    trainerdata.find({typeOfEmp: typeOfEmp}).then((data)=>{
        res.send(data);
    })
})

app.get('/courseSearch/:course',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    let course= req.params.course;
    trainerdata.find({course: course}).then((data)=>{
        res.send(data);
    })
});

//trainerApproval
app.get('/approveRequest/:id', (req, res) => {

    const id = req.params.id;
    enrollmentdata.findOne({ _id: id })
      .then((request) => {
        res.send(request);
      });
  })

  app.post('/approvedTrainer', async (req, res)=> {

    let trainerName = req.body.trainerName;
    let typeOfEmp = req.body.typeOfEmp;
    let id = Math.random().toString(16)+ "_"+ trainerName.concat(typeOfEmp).toUpperCase();
    let approvedTrainer = {
      trainerName: req.body.trainerName,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
      qualification: req.body.qualification,
      skill: req.body.skill,
      companyName: req.body.companyName,
      designation: req.body.designation,
      course: req.body.course,
      image: req.body.image,
      typeOfEmp: req.body.typeOfEmp,
      id: id
    }
   
    let approvedtrainer = new trainerdata(approvedTrainer);
    approvedtrainer.save();
    const trainerEmail =  await enrollmentdata.findOne({ email: approvedtrainer.email })

    //sending approved mail to trainer

    var transport = nodemailer.createTransport(
      {
        service: 'gmail',
        auth: {
          user: 'ictak2022@gmail.com',
          pass: 'xxuantsnvdvlqhyo'
        }
      }
    )
  
    var mailOptions = {
  
      from: 'ictak2022@gmail.com',
      to: approvedtrainer.email,
      subject: 'Approved as ICTAK Trainer',
      text: `Congratulations ${approvedtrainer.trainerName}.
               We are very happy to inform you that you have been approved for the position of ${approvedtrainer.typeOfEmp}trainer for course ${approvedtrainer.course} with ICTAK and your ID is ${approvedtrainer.id}.
              
      Welcome to ICTAK family. 
      Please contact us regarding any query.
  
      Thanks and Regards,
      ICTAK TEAM
      `
    }
    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error + " error in senting email")
      }
      else {
        console.log("email sent " + info.response)
      }
    })
    enrollmentdata.findOneAndDelete({ _id: trainerEmail._id })
      .then(() => {
        console.log('successfully deleted from enrollment list')
        res.send();
      })
  });

  //trainerRequests

app.get('/request', (req, res) =>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  enrollmentdata.find()
    .then((requests)=> {
      res.send(requests);
      // console.log(requests);
    });
});

app.delete('/reject/:id', (req, res) => {

  id = req.params.id;
  console.log(id);
  enrollmentdata.findByIdAndDelete({ _id: id })
    .then(() => {
      res.json("successfully deleted");
      res.send();
    })
})


app.get('/allocatedlist',(req, res)=> {
  
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");

  allocateddata.find()
    .then( (data)=> {
      res.send(data);
    });
});

//trainersList

app.get("/getTrainersList",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  trainerdata.find().then((trainers)=>{
    res.send(trainers);
  })

 //allocate
 app.get("/allocationData/:id",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
    const id = req.params.id;
    trainerdata.findOne({ _id: id })
      .then((request) => {
        res.send(request);
      });
 }) 

 app.post('/dateSchedule',(req,res)=>{
  email=req.body.email;
  allocateddata.find({email:email}).then((data)=>{
    res.send(data);
  })
 })

})


  module.exports=app;