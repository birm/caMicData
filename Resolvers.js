var Connectors = require("./Connectors.js");

const Collections={
  async getAll(){
    return await Connectors.Collections.find({}).exec();
  },
  async getById(id){
    return await Connectors.Collections.find({id:id}).exec();
  },
  addNew(x){
    Connectors.Collections(x).save();
  }
};
const Slides={
  async getAll(){
    return await Connectors.Slides.find({}).exec();
  },
  async getById(id){
    return await Connectors.Slides.find({id:id}).exec();
  },
  addNew(x){
    Connectors.Slides(x).save();
  }
};
const Markings={
  async getAll(){
    return await Connectors.Markings.find({}).exec();
  },
  async getById(id){
    return await Connectors.Markings.find({id:id}).exec();
  },
  addnew(x){
    Connectors.Markings(x).save();
  }
};
const Marktypes={
  async getAll(){
    return await Connectors.Marktypes.find({}).exec();
  },
  async getById(id){
    return await Connectors.Marktypes.find({id:id}).exec();
  },
  addNew(x){
    Connectors.Marktypes(x).save();
  }
};
const Templates={
  async getAll(){
    return await Connectors.Templates.find({}).exec();
  },
  async getById(id){
    return await Connectors.Templates.find({id:id}).exec();
  },
  addNew(x){
    Connectors.Templates(x).save();
  }
};
const Overlays={
  async getAll(){
    return await Connectors.Overlays.find({}).exec();
  },
  async getById(id){
    return await Connectors.Overlays.find({id:id}).exec();
  },
  addNew(x){
    Connectors.Overlays(x).save();
  }
};

var resolvers = {
  RootQuery: {
    Slides: ()=>Slides.getAll(),
    Templates: ()=>Templates.getAll(),
    Overlays: ()=>Overlays.getAll(),
    Markings: ()=>Markings.getAll(),
    Marktypes: ()=>Marktypes.getAll(),
    Collections: ()=>Collections.getAll()
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

module.exports = resolvers
