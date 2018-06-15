var mongoose = require('mongoose')
mongoose.Promise = global.Promise;

var ObjectId = mongoose.Schema.ObjectID
var Schema = mongoose.Schema;

const mongo = mongoose.connect('mongodb://localhost/views', (err) => {
  if(err){
    console.error('Could not connect to MongoDB on port 27017');
  }
});

var collectionSchema = new Schema({
  id: { type: ObjectId, required: true, unique: true },
  name: String,
  type: String,
  contents: Array
})

var slideSchema = new Schema({
  id: { type: ObjectId, required: true, unique: true },
  name: String,
  location: String,
  mpp: Number,
  checksum: String
})

var markingSchema = new Schema({
  id: { type: ObjectId, required: true, unique: true },
  marktype: { type: ObjectId, required: true},
  features: Array
})

var marktypeSchema = new Schema({
  id: { type: ObjectId, required: true, unique: true },
  slide: { type: ObjectId, required: true},
  type: String,
  name: String
})

var templateSchema = new Schema({
  id: { type: ObjectId, required: true, unique: true },
  name: String,
  type: String,
  questions: Array
})

var overlaySchema = new Schema({
  id: { type: ObjectId, required: true, unique: true },
  path: String,
  name: String
})


Connectors.Patches= mongoose.model('Patch',{
  id: { type: ObjectId, required: true, unique: true },
  patchtype: { type: ObjectId, required: true},
  x: Number,
  y: Number,
  features: Array
});

Connectors.Patchtypes= mongoose.model('Patchtype',{
  id: { type: ObjectId, required: true, unique: true },
  slide: { type: ObjectId, required: true},
  type: String,
  name: String,
  width: Number,
  height: Number,
  keys: Array
});

var Connectors = {};
Connectors.Collections = mongoose.model('Collection', collectionSchema);
Connectors.Markings= mongoose.model('Marking', markingSchema);
Connectors.Marktypes= mongoose.model('Marktype', marktypeSchema);
Connectors.Slides= mongoose.model('Slide',slideSchema);
Connectors.Templates= mongoose.model('Template',templateSchema);
Connectors.Overlays=mongoose.model('Overlay',overlaySchema);

module.exports=Connectors;
