var Connector = require("./Connectors.js");

const Collections={
  async getAll(){
    return await Connector.find("Collections",{});
  },
  async getById(id){
    return await Connector.find("Collections",{id:id});
  },
  async addNew(x){
    return await Connector.save("Collections",x);
  }
};
const Slides={
  async getAll(){
    return await Connector.find("Slides", {});
  },
  async getById(id){
    return await Connector.find("Slides", {id:id});
  },
  async addNew(x){
    return await Connector.save("Slides", x);
  }
};
const Markings={
  async getAll(){
    return await Connector.find("Markings", {});
  },
  async getById(id){
    return await Connector.find("Markings", {id:id});
  },
  async getByMarktype(marktype){
    return await Connector.find("Markings", {marktype:marktype});
  },
  async addnew(x){
    return await Connector.save("Markings", x);
  }
};
const Marktypes={
  async getAll(){
    return await Connector.find("Marktypes", {});
  },
  async getById(id){
    return await Connector.find("Marktypes", {id:id});
  },
  async getBySlide(slide){
    return await Connector.find("Marktypes", {slide:slide});
  },
  async addNew(x){
    return await Connector.save("Marktypes", x);
  }
};

const Patches={
  async getAll(){
    return await Connector.find("Patches", {});
  },
  async getById(id){
    return await Connector.find("Patches", {id:id});
  },
  async getByPatchtype(patchtype){
    return await Connector.find("Patches", {patchtype:patchtype});
  },
  async addnew(x){
    return await Connector.save("Patches", x).save();
  }
};
const Patchtypes={
  async getAll(){
    return await Connector.find("Patchtypes", {});
  },
  async getById(id){
    return await Connector.find("Patchtypes", {id:id});
  },
  async getBySlide(slide){
    return await Connector.find("Patchtypes", {slide:slide});
  },
  async addNew(x){
    return await Connector.save("Patchtypes", x);
  }
};

const Templates={
  async getAll(){
    return await Connector.find("Templates", {});
  },
  async getById(id){
    return await Connector.find("Templates", {id:id});
  },
  async getByType(type){
    return await Connector.find("Templates", {type:type});
  },
  async addNew(x){
    return await Connector.save("Templates", x);
  }
};
const Overlays={
  async getAll(){
    return await Connector.find("Overlays", {});
  },
  async getById(id){
    return await Connector.find("Overlays", {id:id});
  },
  async getBySlide(slide){
    return await Connector.find("Overlays", {slide:slide});
  },
  async addNew(x){
    return await Connector.save("Overlays", x);
  }
};

var resolvers = {
  RootQuery: {
    Slides: ()=>Slides.getAll(),
    Templates: ()=>Templates.getAll(),
    Overlays: ()=>Overlays.getAll(),
    Markings: ()=>Markings.getAll(),
    Marktypes: ()=>Marktypes.getAll(),
    Patches: ()=>Patches.getAll(),
    Patchtypes: ()=>Patchtypes.getAll(),
    Collections: ()=>Collections.getAll(),

    Slide: (root,args)=>Slides.getById(args[0])[0],
    Template: (root,args)=>Templates.getById(args[0])[0],
    Overlay: (root,args)=>Overlays.getById(args[0])[0],
    Marking: (root,args)=>Markings.getById(args[0])[0],
    Marktype: (root,args)=>Marktypes.getById(args[0])[0],
    Patch: (root,args)=>Markings.getById(args[0])[0],
    Patchtype: (root,args)=>Marktypes.getById(args[0])[0],
    Collection: (root,args)=>Collections.getById(args[0])[0],

    TemplateByType: (root,args)=>Templates.getByType(args[0]),
    OverlayBySlide: (root,args)=>Overlays.getBySlide(args[0]),
    MarkingByMarktype: (root,args)=>Markings.getByMarktype(args[0]),
    MarktypeBySlide: (root,args)=>Marktypes.getBySlide(args[0]),
    PatchByPatchtype: (root,args)=>Patches.getByMarktype(args[0]),
    PatchtypeBySlide: (root,args)=>Patchtypes.getBySlide(args[0])
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
