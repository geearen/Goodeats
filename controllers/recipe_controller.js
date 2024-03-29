const express = require("express");
const router = express.Router();
const { authRequired } = require("../utils/auth");
const { Recipe, Review } = require("../models");

/* Index Route */
router.get("/", function (request, response, next) {
  // response.send("I AM INDEX");
  Recipe.find({}, function (error, allRecipes) {
    if (error) {
      console.log(error);
      request.error = error;
      return next();
    }

    const context = {
      recipes: allRecipes,
      isEmpty: false,
    };
    return response.render("recipes/index.ejs", context);
  });
});

/* Category Route */
router.get("/filter/:category", function (request, response, next) {
  let query = {};
  if (request.params.category !== "all") {
    query = { category: request.params.category };
  }
  Recipe.find(query, function (error, filteredRecipes) {
    if (error) {
      console.log(error);
      request.error = error;
      return next();
    }
    let context = {};
    if (filteredRecipes.length == 0) {
      // return next();
      context = { isEmpty: true };
    } else {
      context = {
        recipes: filteredRecipes,
        isEmpty: false,
        viewLength: filteredRecipes.length,
      };
    }
    return response.render("recipes/index.ejs", context);
  });
});

/* New Route */
router.get("/new", function (request, response) {
  // response.send("I AM NEW PAGE");
  const context = {};
  return response.render("recipes/new.ejs", context);
});

/* Create Route */
router.post("/", function (request, response) {
  // response.send("I AM CREATE PAGE");
  Recipe.create(request.body, function (error, createdRecipe) {
    if (error) {
      console.log(error);
      request.error = error;

      const context = {
        error,
      };
      return response.render("recipes/new.ejs", context);
    }
    return response.redirect(`/recipes/${createdRecipe.id}`);
  });
});

/* Create Route for Show Page Comment */
router.post("/comment/:id", authRequired, function (request, response) {
  // request.body.user = request.session.currentUser.id;
  Review.create(request.body, function (error, createdReviews) {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }
    return response.redirect(`/recipes/${request.params.id}`);
  });
});

/* Show Route */
router.get("/:id", function (request, response, next) {
  // response.send("I AM SHOW PAGE");
  Recipe.findById(request.params.id, function (error, foundRecipe) {
    if (error) {
      console.log(error);
      request.error = error;
      return next();
    }
    Review.find({ recipe: request.params.id })
      .populate("user")
      .exec(function (error, allReviews) {
        const context = {
          recipe: foundRecipe,
          reviews: allReviews,
        };
        return response.render("recipes/show.ejs", context);
      });
  });
});

/* Edit Route */
router.get("/:id/edit", authRequired, function (request, response, next) {
  // response.send("I AM EDIT PAGE")

  Recipe.findById(request.params.id, function (error, foundRecipe) {
    if (error) {
      console.log(error);
      request.error = error;
      return next();
    }
    const context = {
      recipe: foundRecipe,
    };
    return response.render("recipes/edit.ejs", context);
  });
});

/* Update Route */
router.put("/:id", function (request, response) {
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
      }
      return response.redirect(`/recipes/${updatedRecipe.id}`);
    }
  );
});

/* Delete Route */
router.delete("/:id", authRequired, function (request, response, next) {
  // response.send("I AM DELETED oh nooo");
  Recipe.findByIdAndDelete(request.params.id, function (error, deletedRecipes) {
    if (error) {
      console.log(error);
      request.error = error;
      return next();
    }
    Review.deleteMany(
      { recipe: request.params.id },
      function (error, foundReviews) {
        if (error) {
          console.log(error);
          request.error = error;
          return next();
        }
        return response.redirect("/recipes");
      }
    );
  });
});

module.exports = router;
