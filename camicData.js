var express = require('express');
var bodyParser = require('body-parser');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
var { makeExecutableSchema } = require('graphql-tools');

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

type RootQuery{
  collection(id): Collection
  slide(id): Slide
  template(id): Template
  overlay(id): Overlay
  marking(id): Marking
  marktype(id): Marktype
}

type RootMutation{
  collection: Collection
  slide: Slide
  template: Template
  overlay: Overlay
  marking: Marking
  marktype: Marktype
}

schema {
  query: RootQuery
  mutation: RootMutation
}`];

var resolvers = {
  Query: {
    hello(root) {
      return 'world';
    }
  }
};

var schema = makeExecutableSchema({typeDefs, resolvers});
var app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
