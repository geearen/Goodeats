const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema ({
    title : {
        type: String, 
        requires: [true, "Title is needed"]
    },
    image: {
        type: String, 
        required: [true, "Image is needed"]
    },
    category :{
        type: String,
        required:[true , "Oops you forgot to put a category" ],
        lowercase:true,
        trim:true,
    },
    ingredients: {
        type: [String], 
        require: [true, "Oops you forgot to put your ingredients!"]
    },
    instructions:{
        type :[String], 
        require: [true, "Oops you forgot to put your instructions!"]
    },
  },
{
    timestamps:true 
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
