var express = require('express');
var bodyParser = require('body-parser');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
var { makeExecutableSchema } = require('graphql-tools');
var Connectors = require("./Connectors.js")

const Collections{
  getAll(){
    return await Connectors.Collections.find({}).exec();
  },
  getById(id){
    return await Connectors.Collections.find({id:id}).exec();
  },
  addNew(x){
    Connectors.Collections(x).save();
  }
};
const Slides{
  getAll(){
    return await Connectors.Slides.find({}).exec();
  },
  getById(id){
    return await Connectors.Slides.find({id:id}).exec();
  },
  addNew(x){
    Connectors.Slides(x).save();
  }
};
const Markings{
  getAll(){
    return await Connectors.Markings.find({}).exec();
  },
  getById(id){
    return await Connectors.Markings.find({id:id}).exec();
  },
  addnew(x){
    Connectors.Markings(x).save();
  }
};
const Marktypes{
  getAll(){
    return await Connectors.Marktypes.find({}).exec();
  },
  getById(id){
    return await Connectors.Marktypes.find({id:id}).exec();
  },
  addNew(x){
    Connectors.Marktypes(x).save();
  }
};
const Templates{
  getAll(){
    return await Connectors.Templates.find({}).exec();
  },
  getById(id){
    return await Connectors.Templates.find({id:id}).exec();
  },
  addNew(x){
    Connectors.Templates(x).save();
  }
};
const Overlays{
  getAll(){
    return await Connectors.Overlays.find({}).exec();
  },
  getById(id){
    return await Connectors.Overlays.find({id:id}).exec();
  },
  addNew(x){
    Connectors.Overlays(x).save();
  }
};

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
    id: (root, args) => Connectors.Collections.getById(args[0])
  },
  Slide: {
    id: (root, args) => Connectors.Slides.getById(args[0])
  },
  Template: {
    id: (root, args) => Connectors.Templates.getById(args[0])
  },
  Overlay: {
    id: (root, args) => Connectors.Overlays.getById(args[0])
  },
  Marking: {
    id: (root, args) => Connectors.Markings.getById(args[0])
  },
  Marktype: {
    id: (root, args) => Connectors.Marktypes.getById(args[0])
  }
};

var schema = makeExecutableSchema({typeDefs, resolvers});
var app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
