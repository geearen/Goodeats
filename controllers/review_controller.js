
const express = require("express");
const router = express.Router();

const {Review} = require("../models");


/* Index Route */
router.get("/", function (request, response) {
  Review.find({}, function (error, allReviews){
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }
    const context = {
      reviews: allReviews,
    };
    return response.render("reviews/index", context);
  })
});


/* Create Route */
router.post("/", function(request, response){
  Review.create(request.body, function (error, createdReviews){
    if(error){
      console.log(error)
      req.error = error;
      return next();
    }  
   return response.redirect("/reviews")
  });
});


/* Delete Route */
router.delete("/:id", function(request, response){
  Review.findById(request.param.id, function (error, deletedReviews){
    if(error) {
      console.log(error)
      req.error = error;
      return next();
     }
 return response.redirect("/reviews")
  })
});

module.exports = router;