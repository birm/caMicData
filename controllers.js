var Connector = require('./Connector.js');
var Validation = require('./Validation.js');
var Joi = require('joi')

// dry

function findMethod(collection){
  return async function(requet, response){
    query = {};
    try{
      var data = await Connector.find(collection, query);
      response.send(data);
    }
    catch(error){
      response.status(500).send(error)
    }
  }
}

function findOneMethod(collection){
  return async function(requet, response){
    query = {};
    try{
      var data = await Connector.find(collection, query);
      response.send(data[0]);
    }
    catch(error){
      response.status(500).send(error)
    }
  }
}

function postMethod(collection){
  return async function(requet, response){
    data = {};
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
          response.send(data);
        }
        catch(error){
          response.status(500).send(error)
        }
      }
    }
  }
}
