const {Review} = require("../models");

Review.deleteMany({}, function(error, deletedReviews){
  if(error){
    return console.log(error);
  }
  Review.insertMany(
    [
      {
        rating: 5,
        content: "This is bussin!",
        recipe:"610afd2852368d3b925f4884",
        user:"610b0908ca0a541b90dec5b8"
      },
      {
        rating: 2,
        content: "tooo sweet",
        recipe:"610af82952368d3b925f486f",
        user:"610b1d383145af4864b17bdd"
      },
      {
        rating:4,
        content: "Something is missing and I can't pin out what it is",
        recipe:"610a1d72c42c2425a7dfe58c",
        user:"610b1d383145af4864b17bdd",
      }
    ],
    function(error, createdReviews){
      if(error){
        return console.log(error);
      }
      console.log("========Seed Reviews Complete======")
      console.log(createdReviews);
    }
  )
});