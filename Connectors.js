import Mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const mongo = Mongoose.connect('mongodb://localhost/views', (err) => {
  if(err){
    console.error('Could not connect to MongoDB on port 27017');
  }
});

var Connectors = {};

Connectors.Collection = mongoose.model('Collection',{
  id: { type: Number, required: true, unique: true },
  name: String,
  type: String,
  contents: Array
});

Connectors.Slide= mongoose.model('Slide',{
  id: { type: Number, required: true, unique: true },
  name: String,
  location: String,
  mpp: Number,
  checksum: String
});

Connectors.Marking= mongoose.model('Marking',{
  id: { type: Number, required: true, unique: true },
  marktype: { type: Number, required: true},
  features: Array
});

Connectors.Marktype= mongoose.model('Marktype',{
  id: { type: Number, required: true, unique: true },
  slide: { type: Number, required: true},
  type: String,
  name: String
});

Connectors.Template= mongoose.model('Template',{
  id: { type: Number, required: true, unique: true },
  name: String,
  type: String,
  questions: Array
});

Connectors.Overlay== mongoose.model('Overlay',{
  id: { type: Number, required: true, unique: true },
  path: String,
  name: String
});

module.exports=Connectors;
