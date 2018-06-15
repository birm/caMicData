var typeDefs = `
type Collection {
  id: ID!
  name: String
  type: String!
  contents: [Int!]
}

type Slide{
  id: ID!
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
  id: ID!
  marktype: Int!
  features: [Feature]
}

type Marktype{
  id: ID!
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
  id: ID!
  name: String
  type: String
  questions: [Question]
}

type Overlay{
  id: ID!
  path: String
  name: String
  slide: ID
}


input CollectionInput {
  name: String
  type: String!
  contents: [Int!]
}

input SlideInput{
  name: String
  location: String
  mpp: Float
  checksum: String
}

input FeatureInput{
  type: String
  geomery: [[Float!]]
}

input MarkingInput{
  marktype: Int!
  features: [FeatureInput]
}

input MarktypeInput{
  slide: Int!
  type: String
  name: String!
}

input QuestionInput{
  field: String!
  type: String!
  enum: [String!]
}

input TemplateInput{
  name: String
  type: String
  questions: [QuestionInput]
}

input OverlayInput{
  path: String
  name: String
  slide: ID
}

type RootQuery{
  Slides: [Slide]
  Collections: [Collection]
  Templates: [Template]
  Overlays: [Overlay]
  Markings: [Marking]
  Marktypes: [Marktype]
  Slide(id:ID): Slide
  Collection(id:ID): Collection
  Template(id:ID): Template
  Overlay(id:ID): Overlay
  Marking(id:ID): Marking
  Marktype(id:ID): Marktype
  TemplateByType(type:String): Template
  OverlayBySlide(slide:ID): Overlay
  MarkingByMarktype(marktype:ID): Marking
  MarktypeBySlide(slide:ID): Marktype
}

type RootMutation {
  newSlide(input:SlideInput): Slide
  newCollection(input:CollectionInput): Collection
  newTemplate(input: TemplateInput): Template
  newOverlay(input:OverlayInput): Overlay
  newMarking(input:MarkingInput): Marking
  newMarktype(input:MarktypeInput): Marktype
}

schema{
  query: RootQuery
  mutation: RootMutation
}
`;

module.exports = typeDefs
