const mongoose =require("mongoose");
const schema=mongoose.Schema;

const trainerSchema= new schema({
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

var trainerData= mongoose.model('trainerdata',trainerSchema);
module.exports=trainerData;