require("dotenv").config();
const express= require ("express");
const app= express();
const nodemailer=require("nodemailer");
const jwt = require("jsonwebtoken")
const logindata = require("../model/userdata")
const enrollmentdata=require("../model/enrollmentdata");
const trainerdata=require("../model/trainerdata.js");
const allocateddata=require("../model/allocateddata");
const coursedata=require("../model/coursedata");
const eventdata=require("../model/eventdata");
// const enrollmentData = require("../model/enrollmentdata");
const { db } = require("../model/enrollmentdata");

// Middleware Fuction to verify Token send from FrontEnd
function verifyToken(req,res,next){
  //console.log(req.headers)

  if(!req.headers.authorization){
     return res.status(401).send("Unauthorized Access")
  }
  var tokens = req.headers.authorization.split(' ')[2];
 
 console.log(tokens)
 if(tokens == "null"){
     return res.status(401).send("Unauthorized Access")
 }

 var payload= jwt.verify(tokens , "hiddenkey")
 console.log(payload)
 if(!payload){
     return res.status(401).send("Unauthorized Access")
 }
 req.userId = payload.subject
      next()
 }





// dashboard

app.get('/getTrainers',verifyToken ,(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    trainerdata.find().then((trainers)=>{
        res.send(trainers);
    })
});

app.get('/getCount',verifyToken,(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    var trainerCount=[];
    enrollmentdata.countDocuments().then((number)=>{
        trainerCount.push(number);
        eventdata.countDocuments().then((number)=>{
         trainerCount.push(number);
          trainerdata.countDocuments().then((number)=>{
            trainerCount.push(number);
            res.send(trainerCount);
          })
    })    
    })  
})

app.get('/nameSearch/:name',verifyToken,(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    let trainerName= req.params.name;
    // console.log(trainerName);
    trainerdata.find({trainerName: trainerName}).then((data)=>{
        res.send(data);
      })
})

app.get('/skillSearch/:skill',verifyToken,(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    let skill= req.params.skill;
    trainerdata.find({skill: skill}).then((data)=>{
        res.send(data);
    })
})

app.get('/empSearch/:emp',verifyToken,(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    let typeOfEmp=req.params.emp;
    trainerdata.find({typeOfEmp: typeOfEmp}).then((data)=>{
        res.send(data);
    })
})

app.get('/courseSearch/:course',verifyToken,(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    let course= req.params.course;
    trainerdata.find({course: course}).then((data)=>{
        res.send(data);
    })
});

//trainerApproval
app.get('/approveRequest/:id',verifyToken, (req, res) => {

    const id = req.params.id;
    enrollmentdata.findOne({ _id: id })
      .then((request) => {
        res.send(request);
      });
  })

  app.post('/approvedTrainer',verifyToken, async (req, res)=> {

    let trainerName = req.body.trainerName;
    let typeOfEmp = req.body.typeOfEmp;
    let about="A trainer with the ability to be flexible, think creatively and effectively communicate, whether communicating highly technical, sensitive or challenging information.";
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
      id: id,
      about: about
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

  enrollmentdata.findOne({ _id: trainerEmail._id })
  .then((data)=>{
      let courseList=data.course.split(",");
      // console.log(courseList);
      courseList=courseList.filter(p => p!==approvedtrainer.course).join(",");
      // console.log(courseList);
      data.course=courseList;
      // console.log(data.course);
      let newApprovedTrainer= new enrollmentdata(data);
      newApprovedTrainer.save();
      res.send(data);


  })

  });  

  //trainerRequests

app.get('/request',verifyToken, (req, res) =>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  enrollmentdata.find()
    .then((requests)=> {
      res.send(requests);
      // console.log(requests);
    });
});

app.delete('/reject/:id',verifyToken, (req, res) => {

  id = req.params.id;
  console.log(id);
  enrollmentdata.findById({_id: id })
  .then((data)=>{
    //console.log(data.email)

    logindata.findOneAndUpdate({email:data.email},{$set:{
      "rej":"yes"
      
    }},{new: true})
    .then((data)=>{
      console.log(data)
    })
  })
  enrollmentdata.findByIdAndDelete({ _id: id })
    .then(() => {
      res.json("successfully deleted");
      res.send();
    })
})


app.get('/allocatedlist',verifyToken,(req, res)=> {
  
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");

  eventdata.find()
    .then( (data)=> {
      res.send(data);
    });
});

//trainersList

app.get("/getTrainersList",verifyToken,(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  trainerdata.find().then((trainers)=>{
    res.send(trainers);
  })

  app.get("/removeTrainer/:id",verifyToken,(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
    const id=req.params.id;
    trainerdata.find({_id:id},{trainerName:1,_id:0})
    .then((data)=>{
      res.send(data);
    })
  })
  
app.delete("/removeTrainer/:id",verifyToken,(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  id=req.params.id;
  trainerdata.findByIdAndDelete({_id:id})
  .then(()=>{
    res.json("successfully deleted");
    res.send();
  })
})  

 //allocate
 app.get("/allocationData/:id",verifyToken,(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
    const id = req.params.id;
    trainerdata.findOne({ _id: id })
      .then((request) => {
        res.send(request);
      });
 }) 

 app.get('/dateSchedule/:email',verifyToken,(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  let email=req.params.email;
  let course=req.body.course;
  console.log(email);
  allocateddata.findOne({email: email})
  .then((data)=>{
    res.send(data);
  })
 })

})

//eventcreate
app.get('/getCourses',verifyToken,(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  coursedata.find({},{title:1,_id:0})
  .then((data)=>{
    res.send(data);
  })
})

app.get('/selectedCourse/:course',verifyToken,(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  courseid=req.params.course;
  // console.log(courseid);
  trainerdata.find({course:courseid},{trainerName:1,_id:0})
  .then((data)=>{
    res.send(data)
  })
})


app.get('/getDate',verifyToken,(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  eventdata.find({},{startDate:1,_id:0})
  .then((data)=>{
    res.send(data);
  })
})

app.get('/getEndDate',verifyToken,(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  eventdata.find({},{endDate:1,_id:0})
  .then((data)=>{
    res.send(data);
  })
})

app.post('/allocated',verifyToken, async (req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
     
   let allocatedData={
    trainer:req.body.trainer,
    associative:req.body.associative,
    startDate:req.body.startDateTime,
    endDate:req.body.endDateTime,
    courseId:req.body.courseId,
    batchId:req.body.batchId,
    meetingLink:req.body.meetingLink,
    course:req.body.course,
    eStart:req.body.eStart,
    eEnd:req.body.eEnd
  }

  console.log(req.body);

  let traineremail= await trainerdata.findOne({trainerName:allocatedData.trainer},{email:1,_id:0});
 
 
  tEmail=String(traineremail['email']);
  
//sending mail to trainer about sessiondetails
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
    to: tEmail,
    subject: 'Session Schedule',
    text: `Mr/Ms. ${allocatedData.trainer}
             
    Training Session Details

              COURSE:${allocatedData.course}
              DATE & TIME: ${allocatedData.eStart} to  ${allocatedData.eEnd}
              ASSOCIATIVE TRAINER:${allocatedData.associative}
              COURSEID: ${allocatedData.courseId};
              BATCHID: ${allocatedData.batchId};
              MEETINGLINK: ${allocatedData.meetingLink}
            
    Happy Teaching...              
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

  //sending mail to associate trainer about session details

   if(allocatedData.associative!=="" && allocatedData.associative!=="nil")
  {
    let associativemail= await trainerdata.findOne({trainerName:allocatedData.associative},{email:1,_id:0});
    aEmail=String(associativemail['email']);
    var mailOptionsTrainer = {

      from: 'ictak2022@gmail.com',
      to: aEmail,
      subject: 'Session Schedule',
      text: `Mr/Ms. ${allocatedData.associative}
               
      Training Session Details
      
                COURSE: ${allocatedData.course}
                DATE & TIME: ${allocatedData.eStart} to  ${allocatedData.eEnd}
                TRAINER: ${allocatedData.trainer}
                COURSEID: ${allocatedData.courseId}
                BATCHID: ${allocatedData.batchId}
                MEETINGLINK: ${allocatedData.meetingLink}
  
      Happy Teaching...              
      Please contact us regarding any query.
  
      Thanks and Regards,
      ICTAK TEAM
      `
    }
    transport.sendMail(mailOptionsTrainer, function (error, info) {
      if (error) {
        console.log(error + " error in senting email")
      }
      else {
        console.log("email sent " + info.response)
      }
    })
  
  }else{

    aEmail="";
  }

  let allocatedEvent={
    trainer:req.body.trainer,
    associative:req.body.associative,
    startDate:req.body.startDateTime,
    endDate:req.body.endDateTime,
    courseId:req.body.courseId,
    batchId:req.body.batchId,
    meetingLink:req.body.meetingLink,
    course:req.body.course,
    eStart:req.body.eStart,
    eEnd:req.body.eEnd,
    tEmail:tEmail,
    aEmail:aEmail,
  }
   let approvedSession=  new eventdata(allocatedEvent);
   approvedSession.save();
 
  await eventdata.find(approvedSession)
  .then((data)=>{
    res.send();
  })

})
// delete an event 
app.delete("/removeEvent/:id",verifyToken,(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  id=req.params.id;

  eventdata.findByIdAndDelete({_id:id})
  .then((data)=>{
    console.log(data);
    let emailTrainer=data.tEmail;
    let emailAssociate=data.aEmail;

    //sending mail to trainer about cancellation of session
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
    to: emailTrainer,
    subject: 'Session Cancelled',
    text: `Mr/Ms. ${data.trainer}
                     
                  This is to inform you that session scheduled on ${data.eStart} to ${data.eEnd} for ${data.course} course has been cancelled.
                  You will be informed with updated Session Schedule soon.
    
            
    Sorry for the inconvenience             
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

  //sending mail to associate trainer about session details

  if(data.associative!=="")
  {
    var mailOptionsTrainer = {

      from: 'ictak2022@gmail.com',
      to: emailAssociate,
      subject: 'Session Cancelled',
      text: `Mr/Ms. ${data.associative}
                          This is to inform you that session scheduled on ${data.eStart} to ${data.eEnd} for ${data.course} course has been cancelled.
                           You will be informed with updated Session Schedule soon.


      Sorry for the inconvenience             
      Please contact us regarding any query.

      Thanks and Regards,
      ICTAK TEAM`
     
    }
    transport.sendMail(mailOptionsTrainer, function (error, info) {
      if (error) {
        console.log(error + " error in senting email")
      }
      else {
        console.log("email sent " + info.response)
      }
    })
  }
    res.json("successfully deleted the Event");
    res.send();
})

})
 




//approveddata to trainer
app.get("/approvedData/:email",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  const email=req.params.email;
  trainerdata.find({email:email})
  .then((data)=>{
    res.send(data);
  })
})

  module.exports=app;