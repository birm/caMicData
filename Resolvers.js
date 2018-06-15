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
    Collections: ()=>Collections.getAll(),
    Slide: (root,args)=>Slides.getById(args[0])[0],
    Template: (root,args)=>Templates.getById(args[0]),
    Overlay: (root,args)=>Overlays.getById(args[0])[0],
    Marking: (root,args)=>Markings.getById(args[0])[0],
    Marktype: (root,args)=>Marktypes.getById(args[0])[0],
    Collection: (root,args)=>Collections.getById(args[0])[0]

  }
};

module.exports = resolvers
