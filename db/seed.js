const {Recipe} = require("../models");

Recipe.deleteMany({}, function (error,deletedRecipes){
  if(error){
    return console.log(error);
  }
  Recipe.insertMany(
    [
      {
        title:"Easy Zucchini",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5469898.jpg&w=596&h=399&c=sc&poi=face&q=85",
        category:"Snacks",
        ingredients:["zucchini","extra-virgin olive oil","white wine viner","chopped fresh parsley", "garlic", "salt", "ground pepper"],
        instructions: ["Season zucchini with salt and pepper and brush lightly with olive oil.", "Heat a grill pan over medium-high heat. Place zucchini slices, a few at a time, into hot pan and cook until the pattern of the pan is imprinted into zucchini, about 4 minutes. Turn and cook an additional 3 to 4 minutes.", "Combine olive oil, vinegar, parsley, garlic, salt, and pepper in a small bowl. Brush cooked zucchini with olive oil mixture and serve."],
      },
      {
        title:"Basic Crepes",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7960560.jpg&q=85",
        category: "Dessert",
        ingredients: ["all purpose flour","eggs","milk","water","salt","butter"],
        instructions: ["In a large mixing bowl, whisk together the flour and the eggs. Gradually add in the milk and water, stirring to combine. Add the salt and butter; beat until smooth.", "Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each crepe. Tilt the pan with a circular motion so that the batter coats the surface evenly.", "Cook the crepe for about 2 minutes, until the bottom is light brown. Loosen with a spatula, turn and cook the other side. Serve hot."],
      }
    ],
    function (error, createdRecipes){
      if(error){
        return console.log(error);
      }
      console.log("===== Recipes Seed Complete =====");
      console.log(createdRecipes);
    }
  );
});