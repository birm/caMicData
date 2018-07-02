var MongoClient = require('mongodb').MongoClient;

var url = process.env.MONGO || 'mongodb://localhost:27017'
console.log(url)
var Connector = {
    save(collection, data) {
        var savePromise = new Promise(function(resolve, reject) {
            MongoClient.connect(url, function(err, dbo) {
                if (err) {
                    console.log(err)
                }
                db = dbo.db("camicdata")
                var col = db.collection(collection);
                col.insert(data, function(err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res)
                    }
                });
            });
        });
        return savePromise;
    },
    find(collection, query) {
        var findPromise = new Promise(function(resolve, reject) {
            MongoClient.connect(url, function(err, dbo) {
                if (err) {
                    console.log(err)
                }
                db = dbo.db("camicdata")
                var col = db.collection(collection);
                col.find(query).toArray(function(err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res)
                    }
                });
            });
        });
        return findPromise;
    }
};


module.exports = Connector;
