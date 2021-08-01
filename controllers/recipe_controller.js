
const express = require("express");
const router = express.Router();

const {Recipe} = require("../models");


/* Index Route */
router.get("/", function (request, response) {
    // response.send("I AM INDEX");
    Recipe.find({}, function (error, allRecipes){
      if(error){
        console.log(error);
        request.error = error;  
      };
      
      const context = {
        recipes:allRecipes,
      };
      response.send(context);
    })
});


/* New Route */
router.get("/new", function(request, response){
  // response.send("I AM NEW PAGE");
  const context ={};
  return res.render("products/new", context);
});

/* Create Route */
router.post("/", function(request, response){
  // response.send("I AM CREATE PAGE");
  
});

/* Show Route */
router.get("/:id", function(request,response){
  response.send("I AM SHOW PAGE");
});

/* Edit Route */
router.get("/:id/edit", function(request,response){
  response.send("I AM EDIT PAGE")
});

/* Update Route */
router.put("/:id", function(request, response){
  response.send("I AM UPDATED");
});

/* Delete Route */
router.delete("/:id", function(request, response){
  response.send("I AM DELETED oh nooo");
});

module.exports = router;