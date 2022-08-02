const mongoose =require("mongoose");
const schema=mongoose.Schema;

const trainerSchema= new schema({
    id:String,
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
    typeOfEmp:String,
    about:String,
});

var trainerData= mongoose.model('trainerdata',trainerSchema);
module.exports=trainerData;