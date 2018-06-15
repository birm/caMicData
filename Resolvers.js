var Connectors = require("./Connectors.js");

const Collections={
  async getAll(){
    return await Connectors.Collections.find({}).exec();
  },
  async getById(id){
    return await Connectors.Collections.find({id:id}).exec();
  },
  async addNew(x){
    return await Connectors.Collections(x).save();
  }
};
const Slides={
  async getAll(){
    return await Connectors.Slides.find({}).exec();
  },
  async getById(id){
    return await Connectors.Slides.find({id:id}).exec();
  },
  async addNew(x){
    return await Connectors.Slides(x).save();
  }
};
const Markings={
  async getAll(){
    return await Connectors.Markings.find({}).exec();
  },
  async getById(id){
    return await Connectors.Markings.find({id:id}).exec();
  },
  async getByMarktype(marktype){
    return await Connectors.Markings.find({marktype:marktype}).exec();
  },
  async addnew(x){
    return await Connectors.Markings(x).save();
  }
};
const Marktypes={
  async getAll(){
    return await Connectors.Marktypes.find({}).exec();
  },
  async getById(id){
    return await Connectors.Marktypes.find({id:id}).exec();
  },
  async getBySlide(slide){
    return await Connectors.Marktypes.find({slide:slide}).exec();
  },
  async addNew(x){
    return await Connectors.Marktypes(x).save();
  }
};

const Patches={
  async getAll(){
    return await Connectors.Patches.find({}).exec();
  },
  async getById(id){
    return await Connectors.Patches.find({id:id}).exec();
  },
  async getByPatchtype(patchtype){
    return await Connectors.Patches.find({patchtype:patchtype}).exec();
  },
  async addnew(x){
    return await Connectors.Patches(x).save();
  }
};
const Patchtypes={
  async getAll(){
    return await Connectors.Patchtypes.find({}).exec();
  },
  async getById(id){
    return await Connectors.Patchtypes.find({id:id}).exec();
  },
  async getBySlide(slide){
    return await Connectors.Patchtypes.find({slide:slide}).exec();
  },
  async addNew(x){
    return await Connectors.Patchtypes(x).save();
  }
};

const Templates={
  async getAll(){
    return await Connectors.Templates.find({}).exec();
  },
  async getById(id){
    return await Connectors.Templates.find({id:id}).exec();
  },
  async getByType(type){
    return await Connectors.Templates.find({type:type}).exec();
  },
  async addNew(x){
    return await Connectors.Templates(x).save();
  }
};
const Overlays={
  async getAll(){
    return await Connectors.Overlays.find({}).exec();
  },
  async getById(id){
    return await Connectors.Overlays.find({id:id}).exec();
  },
  async getBySlide(slide){
    return await Connectors.Overlays.find({slide:slide}).exec();
  },
  async addNew(x){
    return await Connectors.Overlays(x).save();
  }
};

var resolvers = {
  RootQuery: {
    Slides: ()=>Slides.getAll(),
    Templates: ()=>Templates.getAll(),
    Overlays: ()=>Overlays.getAll(),
    Markings: ()=>Markings.getAll(),
    Marktypes: ()=>Marktypes.getAll(),
    Patches: ()=>Markings.getAll(),
    Patchtypes: ()=>Marktypes.getAll(),
    Collections: ()=>Collections.getAll(),

    Slide: (root,args)=>Slides.getById(args[0])[0],
    Template: (root,args)=>Templates.getById(args[0])[0],
    Overlay: (root,args)=>Overlays.getById(args[0])[0],
    Marking: (root,args)=>Markings.getById(args[0])[0],
    Marktype: (root,args)=>Marktypes.getById(args[0])[0],
    Patch: (root,args)=>Markings.getById(args[0])[0],
    Patchype: (root,args)=>Marktypes.getById(args[0])[0],
    Collection: (root,args)=>Collections.getById(args[0])[0],

    TemplateByType: (root,args)=>Templates.getByType(args[0]),
    OverlayBySlide: (root,args)=>Overlays.getBySlide(args[0]),
    MarkingByMarktype: (root,args)=>Markings.getByMarktype(args[0]),
    MarktypeBySlide: (root,args)=>Marktypes.getBySlide(args[0]),
    PatchByPatchtype: (root,args)=>Patches.getByMarktype(args[0]),
    PatchypeBySlide: (root,args)=>Patchtypes.getBySlide(args[0])
  },
  RootMutation: {
    newSlide: (root, data) => Slides.addNew(data),
    newTemplate: (root, data) => Templates.addNew(data),
    newOverlay: (root, data) => Overlays.addNew(data),
    newMarking: (root, data) => Markings.addNew(data),
    newMarktype: (root, data) => Marktypes.addNew(data),
    newCollection: (root, data) => Collections.addNew(data)
  }
};

module.exports = resolvers
