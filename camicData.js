var express = require('express');
var bodyParser = require('body-parser');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
var { makeExecutableSchema } = require('graphql-tools');

var data {
  slides: [],
  collections: [],
  markings: [],
  marktypes: [],
  templates: [],
  overlays: []
}

var typeDefs = [`
type Collection {
  id: ID!
  name: String
  type: String!
  contents: [ID!]
}

type Slide{
  id: ID!
  name: String
  location: String!
  mpp: Float
  checksum: String
}

type Feature{
  type: String
  geomery: [[Float!]]
}

type Marking{
  id: ID!
  marktype: ID!
  features: [Feature]
}

type Marktype{
  id: ID!
  slide: ID!
  type: String
  name: String!
}

type Question{
  field: String!
  type: String!
  enum [String!]
}

type Template{
  id: ID!
  name: String
  type: String
  questions: [Question]
}

type Overlay{
  id: ID!
  path: String
  name: String
}
`];

var resolvers = {
  Collection{
    collections: ()=> data.collections
    byId: (root, args) => data.collections.filter((x)=>x.id==args[0])
  },
  Slide{
    slides: ()=> data.slides
    byId: (root, args) => data.slides.filter((x)=>x.id==args[0])
  },
  Template{
    templates: ()=> data.templates
    byId: (root, args) => data.templates.filter((x)=>x.id==args[0])
  },
  Overlay{
    overlays: ()=> data.overlays
    byId: (root, args) => data.overlays.filter((x)=>x.id==args[0])
  },
  Marking{
    markings: ()=> data.markings
    byId: (root, args) => data.markings.filter((x)=>x.id==args[0])
  },
  Marktype{
    marktypes: ()=> data.marktypes
    byId: (root, args) => data.marktypes.filter((x)=>x.id==args[0])
  },
  RootMutation{
    newCollection: (root, args) => (console.log(root,args)),
    newSlide: (root, args) => (console.log(root,args)),
    newTemplate: (root, args) => (console.log(root,args)),
    newOverlay: (root, args) => (console.log(root,args)),
    newMarking: (root, args) => (console.log(root,args)),
    newMarktype: (root, args) => (console.log(root,args)),
  }
};

var schema = makeExecutableSchema({typeDefs, resolvers});
var app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
