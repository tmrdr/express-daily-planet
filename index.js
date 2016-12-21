//requires
var express = require("express");
var bodyParser = require("body-parser");
var ejsLayouts = require("express-ejs-layouts");

//app variables
var app = express();
var db = require("./models");

//setup/use statements
app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));

//routs
app.get("/", function(req,res){
  res.render("home");
});

// get all articles
app.get("/index", function(req,res){
 res.render("articles/index");
});

// get new article
app.get("/new", function(req,res){
  res.render("articles/new");
});

//POST create new article and redirect to articles
app.post("/article/new", function(req, res){
  console.log(req.body);
  db.article.create(req.body).then(function(article){
    res.redirect("home");
  });
});


//list
app.listen(3000);
