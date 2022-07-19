const express= require ("express");
const app= express();

const enrollmentdata=require("../model/enrollmentdata");
const trainerdata=require("../model/trainerdata.js");
// const allocateddata=require("../model/allocateddata");
//dashboard


app.get('/getTrainers',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    trainerdata.find().then((trainers)=>{
        res.send(trainers)
    })
});

app.get('/getCount',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    var trainerCount=[];
    enrollmentdata.countDocuments().then((number)=>{
        trainerCount.push(number);
        trainerdata.countDocuments().then((number)=>{
         trainerCount.push(number);
         res.send(trainerCount);
         console.log(trainerCount)
    })    
    })  
})

app.get('/nameSearch/:name',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    let regex= new RegExp(req.params.trainerName,"i");
    trainerdata.find({trainerName: regex}).then((data)=>{
        res.send(data);
        console.log(data);
    })
})

app.get('/skillSearch/:skill',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    let regex= new RegExp(req.params.skill,"i");
    trainerdata.find({skill: regex}).then((data)=>{
        res.send(data);
    })
})

app.get('/empSearch/:emp',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    let regex= new RegExp(req.params.typeOfEmp,"i");
    trainerdata.find({typeOfEmp: regex}).then((data)=>{
        res.send(data);
    })
})

app.get('/courseSearch/:course',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE");
    let regex= new RegExp(req.params.course,"i");
    trainerdata.find({course: regex}).then((data)=>{
        res.send(data);
    })
})

app.get('/approveRequest/:id', (req, res) => {

    const id = req.params.id;
    enrollmentdata.findOne({ "_id": id })
      .then((request) => {
        console.log('approve request ' + request)
        res.send(request);
      });
  })

  app.post('/approvedTrainer', async function (req, res) {

    let trainerName = req.body.trainerName;
    let typeOfEmp = req.body.typeOfEmp;
    let id =  Math.random().toString(16) + "_"+ trainerName.concat(typeOfEmp).toUpperCase()+Math.random().toString(16);
    let approvedTrainer = {
      trainerName: req.body.trainerName,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
      qualification: req.body.qualification,
      skill: req.body.skill,
      company: req.body.company,
      designation: req.body.designation,
      course: req.body.course,
      image: req.body.image,
      typeOfEmp: req.body.typeOfEmp,
      id: id
    }
   
    let approvedtrainer = new trainerdata(approvedTrainer);
    approvedtrainer.save();
    const trainerEmail = await enrollmentdata.findOne({ email: approvedtrainer.email })
  
    var transport = nodemailer.createTransport(
      {
        service: 'gmail',
        auth: {
          user: 'jenikav952@gmail.com',
          pass: 'ahngshycdtwaagvc'
        }
      }
    )
  
    var mailOptions = {
  
      from: 'jenikav952@gmail.com',
      to: approvedlist.email,
      subject: 'Approved as an ICTAK Trainer',
      text: `Congratulations ${approvedtrainer.trainerName}.Thank you for being a part of ICT Trainers.You are approved as ${approvedtrainer.typeOfEmp}  Trainer for course ${approvedtrainer.course} and your ID is ${approvedtrainer.id}.
      
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
    enrollmentdata.findOneAndDelete({ "_id": trainerEmail._id })
      .then(() => {
        console.log('successfully deleted from enrollment list')
        res.send();
      })
  });

  module.exports=app;