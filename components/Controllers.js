var Connector = require('./Connector.js');
var Validation = require('./Validation.js');
var Joi = require('joi');
var ObjectId = require('mongodb').ObjectID;

// generic methods to post and get data from a collection with validation

var controllers = {}

function id_fix(query){
  if (query['id']){
    query["_id"] = new ObjectId(query['id']);
    delete query['id'];
  }
  return query
}

controllers.findMethod = function(collection) {
    return function(request, response) {
        query = request.query;
        var findPromise = Connector.find(collection, query);
        findPromise.then((data) => {
            response.send(data)
        }).catch((error) => {
            response.status(500).send(error)
        });
    }
}

controllers.findOneMethod = function(collection) {
    return function(request, response) {
        query = request.query;
        var findPromise = Connector.find(collection, query);
        findPromise.then((data) => {
            response.send(data)
        }).catch((error) => {
            response.status(500).send(error)
        });
    }
}

controllers.postMethod = function(collection) {
    return function(request, response) {
        data = request.body;
        valid = Validation[collection]
        if (!valid) {
            response.status(400).send("Invalid Collection");
        } else {
            var result = Joi.validate(data, valid);
            if (result.error) {
                response.status(400).send(result.error);
            } else {
                var insertPromise = Connector.save(collection, data);
                insertPromise.then((result) => {
                    response.send(result);
                }).catch((error) => {
                    response.status(500).send(error)
                })
            }
        }
    }
}

module.exports = controllers;
