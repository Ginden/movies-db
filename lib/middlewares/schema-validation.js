'use strict';
const Promise = require('bluebird');
const Joi = require('joi');


module.exports = (field, schema) => (req, res, next) => {
    const validated = req[field];
    Promise.try(() => Joi.validate(validated, schema))
        .return(null)
        .asCallback(next);
};