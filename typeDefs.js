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
}
`;

module.exports = typeDefs
