const express = require("express");
const router = express.Router();
const { authRequired } = require("../utils/auth");
const { Review, Recipe } = require("../models");

/* Index Route */
router.get("/", function (request, response) {
  Review.find({})
    .populate("recipe user")
    .exec(function (error, allReviews) {
      if (error) {
        console.log(error);
        req.error = error;
        return next();
      }
      Recipe.find({}, function (error, allRecipes) {
        if (error) {
          console.log(error);
          req.error = error;
          return next();
        }
        const context = {
          reviews: allReviews,
          recipes: allRecipes,
        };
        console.log(context.reviews);
        return response.render("reviews/index.ejs", context);
      });
    });
});

/* Create Route */
router.post("/", authRequired, function (request, response) {
  Review.create(request.body, function (error, createdReviews) {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }
    return response.redirect("/reviews");
  });
});

/* Delete Route */
router.delete("/:id", authRequired, function (request, response, next) {
  Review.findByIdAndDelete(request.params.id, function (error, deletedReviews) {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }
    return response.redirect("/reviews");
  });
});

module.exports = router;
