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
            default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Favatars.alphacoders.com%2Fby_sub_category%2F28628&psig=AOvVaw3F9spIiHMf6f8nPakViyJ3&ust=1628026212506000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjhirOkk_ICFQAAAAAdAAAAABAZ"
        },
    },
    {
        timestamps:true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
