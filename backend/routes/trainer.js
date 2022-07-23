const express= require ("express");
const app= express();
app.use(express.json());
const enrollmentData=require("../model/enrollmentdata");
const trainerdata=require("../model/trainerdata.js");

//save enrollment details
app.post('/enroll',function (req, res) {
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    //console.log("-w/o details-"+req.body.address);

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
        image:req.body.image
       
    }
    //console.log(trainerDetails.email);
    var enrollmentdata = new enrollmentData(trainerDetails);
    enrollmentdata.save();

})

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
       trainerdata.find({_id: id}).then((data)=>{
        res.send(data);
        console.log(data);
        });
  })


  app.get('/trainereditprofile/:id', (req, res) => {

    const id = req.params.id;
    trainerdata.findOne({ "_id": id })
      .then((data) => {
        res.send(data);
      });
  });


  app.get("/trainereditprofile/:id" ,(req,res)=>{
    console.log(req.params.id)

    var id = req.params.id
    trainerdata.findOne({"id":id})
    .then((data)=>{
        console.log(data)
        res.send(data);
    });
  });


  app.put("/traineredit" , (req,res)=>{

    console.log(req.body)

    id=req.body._id,
    trainerName=req.body.trainerName,
    email=req.body.email,
    phone=req.body.phone,
    address=req.body.address,
    skill=req.body.skill,
    qualification=req.body.qualification,
    companyName=req.body.companyName,
    designation=req.body.designation,
    course=req.body.course,
    image=req.body.image,
    typeOfEmp=req.body.typeOfEmp
   
 
     console.log(id)

   trainerdata.findByIdAndUpdate({"email":email},
                                    {$set:{
                                        "trainerName":trainerName,
                                        "phone":phone,
                                        "address":address,
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