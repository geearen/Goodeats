const mongoose = require("mongoose");
require("dotenv").config();


const connectionStr = process.env.MONGODB_URI || "mongodb://localhost:27017/goodeats"

mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

mongoose.connection.on("connected", function(){
    console.log(`[${ new Date().toLocaleTimeString()}] ------ MongoDB Connected`);
});

mongoose.connection.on("error", function(error){
    console.log(` MongoDB connection error...` , error);
});

mongoose.connection.on("disconnected", function(){
    console.log("MongoDB Disconnected.....");
});