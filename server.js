/* External Modules */
const express = require("express");
const methodOverride = require("method-override");

/* Module Instance */
const app = express(); 

/* PORT */
const PORT = 5000;

/* Internal Modules */
const controllers = require("./controllers");

/* App Config */
app.set("view engine", "ejs");

/* Middleware */
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

/*  Routes */
// app.use("/recipes", controllers.recipe);
// app.use("/reviews", controllers.review);

/* INDEX route */
app.get("/recipes", function(request, response) {
    response.send("I AM INDEX");
})

/* 404 */

/* PORT BINDING */
app.listen(PORT, () =>{
    console.log(`GoodEats is on port ${PORT}`);
})