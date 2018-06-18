const Joi = require('joi')

var Validation = {};

Validation.Collection = Joi.object();
Validation.Slide = Joi.object();
Validation.Marking = Joi.object();
Validation.Marktype = Joi.object();
Validation.Patchtype = Joi.object();
Validation.Patch = Joi.object();
Validation.Template = Joi.object();
Validation.Overlay = Joi.object();
