const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt= require('bcrypt')

const UserSchema = new Schema({

  email:String,
  username: String,
  password: String,

});

UserSchema.pre('save',async function (next){
 try{
  console.log("before saving a user")
 }
 catch(error){
  next(error)
 }
})

var userdata = mongoose.model('userdata', UserSchema);
module.exports = userdata;