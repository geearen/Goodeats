const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:[true, "Please Provide A First Name"],
        },
        lastName:{
            type:String,
            required:[true, "Please Provide A Last Name"],
        },
        email: {
            type: String,
            required:[true, "Please Provide An Email Address."],
        },
        password: {
            type : String, 
            required: [true, "Please Provide A Password"]
        },
        username: { 
          type: String, 
          required: true, 
          unique: true
        },
        avatar: {
            type: String, 
          default: "https://pbs.twimg.com/profile_images/1237550450/mstom.jpg"
        },
    },
    {
        timestamps:true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
