
const express = require("express");
const router = express.Router();

const {Review} = require("../models");


/* Index Route */
router.get("/", function (request, response) {
    response.send("I AM INDEX OF PERSONAL OPINONS");
});


/* Create Route */
router.post("/", function(request, response){
  response.send("I WILL CREATE MY PERSONAL OPINION");
});


/* Delete Route */
router.delete("/:id", function(request, response){
  response.send("I AM DELETED oh nooo");
});

module.exports = router;