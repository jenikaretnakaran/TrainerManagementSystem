const mongoose =require("mongoose");
const schema=mongoose.Schema;

const enrollmentSchema= new schema({
    trainerName:String,
    email:String,
    phone:String,
    address:String,
    skill:String,
    qualification:String,
    companyName:String,
    designation:String,
    course:String,
    image:String,
    typeOfEmp:String
});

var enrollmentData= mongoose.model('enrollmentdata',enrollmentSchema);
module.exports=enrollmentData;
