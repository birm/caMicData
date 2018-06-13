var express = require('express');
var bodyParser = require('body-parser');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
var { makeExecutableSchema } = require('graphql-tools');

var data = {
  slides: [],
  collections: [],
  markings: [],
  marktypes: [],
  templates: [],
  overlays: []
}

var typeDefs = `
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
  enum: [String!]
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

type RootQuery{
  Template:Template
  Marktype: Marktype
  Marking: Marking
  Feature: Feature
  Slide: Slide
  Collection: Collection
  Overlay: Overlay
}

schema{
  query: RootQuery
}
`;

var resolvers = {
  Collection: {
    id: (root, args) => data.collections.filter((x)=>x.id==args[0])
  },
  Slide: {
    id: (root, args) => data.slides.filter((x)=>x.id==args[0])
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
