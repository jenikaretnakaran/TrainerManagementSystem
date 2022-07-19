const mongoose =require("mongoose");
const schema=mongoose.Schema;

const allocatedSchema= new schema({
    id:String,
    trainerName:String,
    email:String,
    phone:String,
    startDate:String,
    endDate:String,
    time:String,
    course:String,
    courseId:String,
    batchId:String,
    meetingLink:String,
});

var allocatedData= mongoose.model('allocateddata',allocatedSchema);
module.exports=allocatedData;
