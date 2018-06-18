var Connector = require('./Connector.js');
var Validation = require('./Validation.js');
var Joi = require('joi')

// generic methods to post and get data from a collection with validation

var controllers = {}

controllers.findMethod = function(collection){
  return async function(requet, response){
    query = req.query;
    try{
      var data = await Connector.find(collection, query);
      response.send(data);
    }
    catch(error){
      response.status(500).send(error)
    }
  }
}

controllers.findOneMethod = function(collection){
  return async function(requet, response){
    query = req.query;
    try{
      var data = await Connector.find(collection, query);
      response.send(data[0]);
    }
    catch(error){
      response.status(500).send(error)
    }
  }
}

controllers.postMethod= function(collection){
  return async function(requet, response){
    data = req.body;
    valid = Validation[collection]
    if (!valid){
      response.status(400).send("Invalid Collection");
    } else {
      var result = Joi.validate(data, valid);
      if (result.error){
        response.status(400).send(result.error);
      }
      else {
        try{
          var result = await Connector.save(collection, data);
          response.send(result);
        }
        catch(error){
          response.status(500).send(error)
        }
      }
    }
  }
}

module.exports = controllers;
