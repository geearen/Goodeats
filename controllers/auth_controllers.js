const express = require("express");
const router = express.Router();

/* Register --- Get Route */
router.get("/register", function (request,response){
  // response.send("THIS IS THE REGISTER PAGE");
  return response.render("auth/register");
});

/* Login -- GET Route */
router.get("/login", function (request,response){
  // response.send("THIS IS LOGIN PAGE");
  return response.render("auth/login");
});

/* Register --- POST route */
router.post("/register", function(request,response){
  response.send("I CREATED MY ACCOUNT")
});

/* Login --- POST route */
router.post("/login", function (request, response) {
  response.send("I LOG IN")
});

/* LOG OUT --- GET */
router.get("/logout", function (request, response) {
  response.send("I LOGGED OUT")
});

module.exports = router;