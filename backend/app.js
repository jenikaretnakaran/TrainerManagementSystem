require("dotenv").config();

const express = require("express");
const app = express();
const mongoose= require('mongoose');
const cors=require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const adminRoutes =require("./routes/admin")
const loginRoutes =require("./routes/login");
const trainerRoutes=require("./routes/trainer");
const courseRoutes =require("./routes/course")

const PORT = process.env.PORT || 3000;

//DB Connection

mongoose
  .connect("mongodb+srv://admin:user123@project1.cfkyt.mongodb.net/ICTAK?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

  //Routes
  app.use("/api", adminRoutes);
  app.use("/", loginRoutes);
  app.use("/trainer", trainerRoutes);
  app.use("/home" , courseRoutes);
 
app.listen(PORT , (req,res)=>{
    console.log(`Server Running on PORT ${PORT}`);
})