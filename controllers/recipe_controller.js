
const express = require("express");
const router = express.Router();

const {Recipe,Review} = require("../models");



/* Index Route */
router.get("/", function (request, response) {
    // response.send("I AM INDEX");
    Recipe.find({}, function (error, allRecipes){
      if(error){
        console.log(error);
        request.error = error;  
      };


      Recipe.find({}, 
        function(error, foundCategory){
          if(error){
            console.log(error);
            request.error = error;
            return next();
          };

          const context = {
            recipes:allRecipes,
            categories:foundCategory,
          };
          console.log(context)
        return response.render("recipes/index",context);
      });


    });  
});

/* Category Route */


/* New Route */
router.get("/new", function(request, response){
  // response.send("I AM NEW PAGE");
  const context ={};
  return response.render("recipes/new", context);
});

/* Create Route */
router.post("/", function(request, response){
  // response.send("I AM CREATE PAGE");
  Recipe.create(request.body, function(error, createdRecipe){
    if(error){
      console.log(error);
      request.error = error;

      const context = {
        error,
      };
      return response.render("recipes/new", context);
    };
    return response.redirect(`/recipes/${createdRecipe.id}`);
  });
});

/* Show Route */
router.get("/:id", function(request,response){
  // response.send("I AM SHOW PAGE");
  Recipe.findById(request.params.id, function(error, foundRecipe){
    if(error){
      console.log(error);
      request.error = error;
      return next();
    }
    Review.find({}, function(error,allReviews) {
      const context ={
        recipe: foundRecipe,
        reviews:allReviews,
      };
      return response.render("recipes/show", context);
    })
  });
});

/* Edit Route */
router.get("/:id/edit", function(request,response){
  // response.send("I AM EDIT PAGE")
  Recipe.findById(request.params.id, function(error, foundRecipe){
    if(error){
      console.log(error);
      request.error = error;
      return next();
    };
    const context ={
      recipe:foundRecipe,
    };
    return response.render("recipes/edit", context);
  });
});

/* Update Route */
router.put("/:id", function(request, response){
  // response.send("I AM UPDATED");
  Recipe.findByIdAndUpdate(
    request.params.id,
    {
      $set: request.body,
    },
    {
      new: true,
    },
    function (error, updatedRecipe) {
      if (error) {
        console.log(error);
        request.error = error;
        return next();
      };
      return response.redirect(`/recipes/${updatedRecipe.id}`);
    }
  );
});

/* Delete Route */
router.delete("/:id", function(request, response){
  // response.send("I AM DELETED oh nooo");
  Recipe.findByIdAndDelete(request.params.id, function(error, deletedRecipes){
    if(error){
      console.log(error);
      request.error = error;
      return next();
    };
    return response.redirect("/recipes");
  });
});

module.exports = router;