const mongoose =require("mongoose");
const schema=mongoose.Schema;

const eventSchema= new schema({
    trainers:String,
    associative:String,
    startDate:String,
    endDate: String,
    course:String,
    meetingLink:String
});

var eventData= mongoose.model('eventdata',eventSchema);
module.exports=eventData;
