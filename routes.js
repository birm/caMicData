var express = require('express');
var app = express();


"""
GET - Each document type has itself and /one. Query is generated from url params
POST - goes through validation for the type
"""

"""
Collection
"""
app.get("/collection", ()=>())
app.get("/collection/one", ()=>())
app.post("/collection", ()=>())

"""
Slide
"""
app.get("/slide", ()=>())
app.get("/slide/one", ()=>())
app.post("/slide", ()=>())

"""
Marking
"""
app.get("/marking", ()=>())
app.get("/marking/one", ()=>())
app.post("/marking", ()=>())

"""
Marktype
"""
app.get("/marktype", ()=>())
app.get("/marktype/one", ()=>())
app.post("/marktype", ()=>())

"""
Patchtype
"""
app.get("/patchtype", ()=>())
app.get("/patchtype/one", ()=>())
app.post("/patchtype", ()=>())

"""
Patch
"""
app.get("/patch", ()=>())
app.get("/patch/one", ()=>())
app.post("/patch", ()=>())

"""
Template
"""
app.get("/template", ()=>())
app.get("/template/one", ()=>())
app.post("/template", ()=>())

"""
Overlay
"""
app.get("/overlay", ()=>())
app.get("/overlay/one", ()=>())
app.post("/overlay", ()=>())


module.exports = app;
