use camicdata;

db.slide.remove({})
db.marktype.remove({})
db.mark.remove({})

db.slide.insert({
  "name":"seedslide",
  "location":"seed.dzi",
  "mpp":0.499
})

var slideid = db.slide.findOne({"name":"seedslide"})._id

db.marktype.insert({
  "slide":slideid,
  "type":"human",
  "name":"seedmarks"
})

var marktypeid = db.marktype.findOne({"name":"seedmarks"})._id

db.mark.insert({
  "properties":{
    "marktype":marktypeid
  },
  geometry:[
    type:"MultiPolygon",
    coordinates:[
      [
        [[.5,.5],[.75,.5],[.75,.75],[.5,.75]]
      ],[
        [[.2,.2],[.3,.2],[.3,.3],[.2,.3]]
      ]
    ]
  ]
})
