'use strict';

const J = require('joi');

module.exports = J.object({
    movieId: J.string().required(),
    text: J.string().required(),
    rating: J.number().integer()
        .min(0)
        .max(10)
        .optional()
}).required();