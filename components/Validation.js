const Joi = require('joi')

var Validation = {};

Validation.collection = Joi.object().keys({
    name: Joi.string(),
    type: Joi.string().required(),
    contents: Joi.array().items(Joi.string())
});

Validation.slide = Joi.object().keys({
    name: Joi.string(),
    location: Joi.string().required(),
    mpp: Joi.number().required(),
    checksum: Joi.string()
});

Validation.marking = Joi.object().keys({
    properties: Joi.object().keys({
        marktype: Joi.string().required()
    }),
    geometry: Joi.array().items(Joi.object().keys({
        type: Joi.string(),
        coordinates: Joi.array()
    }))
});

Validation.marktype = Joi.object().keys({
    slide: Joi.string().required(),
    type: Joi.string(),
    name: Joi.string().required()
});

Validation.patchtype = Joi.object().keys({
    slide: Joi.string().required(),
    type: Joi.string(),
    name: Joi.string().required(),
    width: Joi.number().required(),
    height: Joi.number().required(),
    keys: Joi.array().items(Joi.string())
});
Validation.patch = Joi.object().keys({
    x: Joi.number().integer().required(),
    y: Joi.number().integer().required(),
    patchtype: Joi.string().required(),
    values: Joi.array().items(Joi.number())
});
Validation.template = Joi.object().keys({
    type: Joi.string(),
    name: Joi.string(),
    questions: Joi.array().items(Joi.object().keys({
        field: Joi.string().required(),
        type: Joi.string().required(),
        enum: Joi.array()
    }))
});
Validation.overlay = Joi.object().keys({
    path: Joi.string(),
    name: Joi.string(),
    slide: Joi.string()
});

module.exports = Validation
