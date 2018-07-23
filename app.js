'use strict';

var express = require('express');
var app = express();
var jsonParser = require("body-parser").json;

var jsonCheck = function(req, res, next) {
  if(req.body) {
    console.log("The sky is", req.body.colour);
  } else {
    console.log("Thre is no body property");
  }
  next();
}

app.use(jsonCheck);
app.use(jsonParser());
app.use(jsonCheck);

//app.use(function(req, res, next){
//  console.log('Log', req.query.colour);
//  next();
//});

//app.use(function(req, res, next){
//  req.myMessage = "Hello, middleware 2";
//  next();
//});
//
//app.use(function(req, res, next){
//  console.log(req.myMessage);
//  next();
//});

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Express server is listening on port", port);
});