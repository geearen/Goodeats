/* External Modules */
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();

/* Module Instance */
const app = express(); 

/* PORT */
const PORT = process.env.PORT || 5000;

/* Internal Modules */
const controllers = require("./controllers");

/* App Config */
app.set("view engine", "ejs");

/* Session Controller */
app.use(session({
  store: MongoStore.create({mongoUrl: process.env.MONGODB_URI}),
  secret: process.env.SECRET,
  resave:false,
  saveUninitialized:false,
  cookie:{
    maxAge:1000*60*60*24*7*2,
  },
})
);
/* Middleware */
app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));


/* Custom Middleware */
app.use(require("./utils/logger"));

/*  Routes */
app.use("/", controllers.auth);
app.use("/recipes", controllers.recipe);
app.use("/reviews", controllers.review);


/* 404 */

/* PORT BINDING */
app.listen(PORT, () =>{
    console.log(`GoodEats is on port ${PORT}`);
})