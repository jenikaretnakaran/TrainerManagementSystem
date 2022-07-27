const mongoose =require("mongoose");
const schema=mongoose.Schema;

const eventSchema= new schema({
    trainer:String,
    associative:String,
    startDate:String,
    endDate: String,
    startTime:String,
    endTime:String,
    courses:[String]
});

var eventData= mongoose.model('eventdata',eventSchema);
module.exports=eventData;
