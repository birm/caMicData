var express = require('express');
var bodyParser = require('body-parser');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
var { makeExecutableSchema } = require('graphql-tools');
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

const Collections{
  getAll(){
    return []
  }
  getById(){
    return[]
  }
  addNew(x){
    return []
  }
};
const Slides{
  getAll(){
    return []
  }
  getById(){
    return[]
  }
  addNew(x){
    return []
  }
};
const Markings{
  getAll(){
    return []
  }
  getById(){
    return[]
  }
};
const Marktypes{
  getAll(){
    return []
  }
  getById(){
    return[]
  }
  addNew(x){
    return []
  }
};
const Templates{
  getAll(){
    return []
  }
  getById(){
    return[]
  }
  addNew(x){
    return []
  }
};
const Overlays{
  getAll(){
    return []
  }
  getById(){
    return[]
  }
  addNew(x){
    return []
  }
};

var data = {
  slides: [{id: 1, name: "bob", location: "/dev/null"}],
  collections: [{id: 1, name:"everything", type: "slide", contents:[1]}],
  markings: [{id: 1, marktype: 1, geometry:[[[1,1], [0,1], [0,0], [1,0]]] }],
  marktypes: [{id: 1, slide: 1, name: "box"}],
  templates: [],
  overlays: []
}

var typeDefs = `
type Collection {
  id: Int!
  name: String
  type: String!
  contents: [Int!]
}

type Slide{
  id: Int
  name: String
  location: String
  mpp: Float
  checksum: String
}

type Feature{
  type: String
  geomery: [[Float!]]
}

type Marking{
  id: Int!
  marktype: Int!
  features: [Feature]
}

type Marktype{
  id: Int!
  slide: Int!
  type: String
  name: String!
}

type Question{
  field: String!
  type: String!
  enum: [String!]
}

type Template{
  id: Int!
  name: String
  type: String
  questions: [Question]
}

type Overlay{
  id: Int!
  path: String
  name: String
}

type RootQuery{
  Slides: [Slide]
  Collections: [Collection]
  Templates: [Template]
  Overlays: [Overlay]
  Markings: [Marking]
  Marktypes: [Marktype]
}

type RootMutation {
  newSlide(input:Slide): Slide
  newCollection(input:Collection): Collection
  newTemplate(input: Template): Template
  newOverlay(input:Overlay): Overlay
  newMarking(input:Marking): Marking
  newMarktype(input:Marktype): Marktype
}

schema{
  query: RootQuery
  mutation: RootMutation
}
`;

var resolvers = {
  RootQuery: {
    Slides: ()=>Collections.getAll(),
    Templates: ()=>Templates.getAll(),
    Overlays: ()=>Overlays.getAll(),
    Markings: ()=>Markings.getAll(),
    Marktypes: ()=>Marktypes.getAll()
  },
  Collection: {
    id: (root, args) => data.collections.filter((x)=>x.id==args[0])
  },
  Slide: {
    id: (root, args) => console.log("hi")
  },
  Template: {
    id: (root, args) => data.templates.filter((x)=>x.id==args[0])
  },
  Overlay: {
    id: (root, args) => data.overlays.filter((x)=>x.id==args[0])
  },
  Marking: {
    id: (root, args) => data.markings.filter((x)=>x.id==args[0])
  },
  Marktype: {
    id: (root, args) => data.marktypes.filter((x)=>x.id==args[0])
  }
};

var schema = makeExecutableSchema({typeDefs, resolvers});
var app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
