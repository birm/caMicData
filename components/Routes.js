var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var controllers = require('./Controllers.js');

/**
GET - Each document type has itself and /one. Query is generated from url params
POST - goes through validation for the type
**/

/**
Collection
**/
app.get("/collection", controllers.findMethod("collection"))
app.get("/collection/one", controllers.findOneMethod("collection"))
app.post("/collection", controllers.postMethod("collection"))

/**
Slide
**/
app.get("/slide", controllers.findMethod("slide"))
app.get("/slide/one", controllers.findOneMethod("slide"))
app.post("/slide", controllers.postMethod("slide"))

/**
Marking
**/
app.get("/marking", controllers.findMethod("marking"))
app.get("/marking/one", controllers.findOneMethod("marking"))
app.post("/marking", controllers.postMethod("marking"))

/**
Marktype
**/
app.get("/marktype", controllers.findMethod("marktype"))
app.get("/marktype/one", controllers.findOneMethod("marktype"))
app.post("/marktype", controllers.postMethod("marktype"))

/**
Heatmap
**/
app.get("/heatmap", controllers.findMethod("heatmap"))
app.get("/heatmap/one", controllers.findOneMethod("heatmap"))
app.post("/heatmap", controllers.postMethod("heatmap"))

/**
Template
**/
app.get("/template", controllers.findMethod("template"))
app.get("/template/one", controllers.findOneMethod("template"))
app.post("/template", controllers.postMethod("template"))

/**
Overlay
**/
app.get("/overlay", controllers.findMethod("overlay"))
app.get("/overlay/one", controllers.findOneMethod("overlay"))
app.post("/overlay", controllers.postMethod("overlay"))


module.exports = app;
