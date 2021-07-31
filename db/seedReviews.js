const {Review} = require("../models");

Review.delete({}, function(error, deletedReviews){
  if(error){
    return console.log(error);
  }
  Review.insertMany(
    [
      {
        rating: 5,
        content: "This is bussin!"
      },
      {
        rating: 2,
        content: "tooo sweet"
      },
      {
        rating:4,
        content: "Something is missing and I can't pin out what it is"
      }
    ]
  )
});