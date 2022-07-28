const mongoose =require("mongoose");
const schema=mongoose.Schema;

const eventSchema= new schema({
    trainer:String,
    associative:String,
    startDate:String,
    endDate: String,
    courseId:String,
    batchId:String,
    meetingLink:String,
    course:String,
    eStart:String,
    eEnd:String
});

var eventData= mongoose.model('eventdata',eventSchema);
module.exports=eventData;
