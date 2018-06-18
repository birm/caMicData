var Connector = require("./Connectors.js");

var Resolve={}

Resolve.Collections={
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
Resolve.Slides={
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
Resolve.Markings={
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
Resolve.Marktypes={
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

Resolve.Patches={
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
Resolve.Patchtypes={
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

Resolve.Templates={
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
Resolve.Overlays={
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


module.exports = Resolve
