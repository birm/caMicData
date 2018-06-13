var express = require('express');
var bodyParser = require('body-parser');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
var { makeExecutableSchema } = require('graphql-tools');

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

schema{
  query: RootQuery
}
`;

var resolvers = {
  RootQuery: {
    Slides: ()=>data.slides,
    Templates: ()=>data.templates,
    Overlays: ()=>data.overlays,
    Markings: ()=>data.markings,
    Marktypes: ()=>data.marktypes
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
