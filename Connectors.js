var mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const mongo = mongoose.connect('mongodb://localhost/views', (err) => {
  if(err){
    console.error('Could not connect to MongoDB on port 27017');
  }
});

var Connectors = {};

Connectors.Collections = mongoose.model('Collection',{
  id: { type: Number, required: true, unique: true },
  name: String,
  type: String,
  contents: Array
});

Connectors.Slides= mongoose.model('Slide',{
  id: { type: Number, required: true, unique: true },
  name: String,
  location: String,
  mpp: Number,
  checksum: String
});

Connectors.Markings= mongoose.model('Marking',{
  id: { type: Number, required: true, unique: true },
  marktype: { type: Number, required: true},
  features: Array
});

Connectors.Marktypes= mongoose.model('Marktype',{
  id: { type: Number, required: true, unique: true },
  slide: { type: Number, required: true},
  type: String,
  name: String
});

Connectors.Templates= mongoose.model('Template',{
  id: { type: Number, required: true, unique: true },
  name: String,
  type: String,
  questions: Array
});

Connectors.Overlays=mongoose.model('Overlay',{
  id: { type: Number, required: true, unique: true },
  path: String,
  name: String
});

module.exports=Connectors;
