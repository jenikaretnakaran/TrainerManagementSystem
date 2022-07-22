require("dotenv").config();

const express = require("express");
const app = express();
const mongoose= require('mongoose');
const cors=require("cors");

const adminRoutes =require("./routes/admin")

const PORT = process.env.PORT || 3000;

//DB Connection
mongoose
  .connect("mongodb://localhost:27017/project",{
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
 

app.listen(PORT , (req,res)=>{
    console.log(`Server Running on PORT ${PORT}`);
})