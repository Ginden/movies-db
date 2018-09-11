'use strict';

const Promise = require('bluebird');
const {OMDbApiClient} = require('../services');

function getCommentsFactory(app, config) {
    const {database, omdb: {apiKey}} = config;

    return (req, res, next) => {
        const omdb = new OMDbApiClient(apiKey, req.request);
        const {body} = req;
        Promise.resolve(body)
            .tap(validate)
            .then(data => database.addComment(data.movieId, data))
            .then(() => {
                res.json({
                    movie: body.movieId
                });
            })
            .then(next)
            .catch(next);
    };
}

module.exports = getCommentsFactory;

