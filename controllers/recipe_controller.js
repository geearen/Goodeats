
const express = require("express");
const router = express.Router();

const {Recipe} = require("../models");


/* Index Route */
router.get("/", function (request, response) {
    response.send("I AM INDEX");
});


/* New Route */
router.get("/new", function(request, response){
  response.send("I AM NEW PAGE");
});

/* Create Route */
router.post("/", function(request, response){
  response.send("I AM CREATE PAGE");
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