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
            .then(body => {
                const {id, title} = body;
                if (id) {
                    return omdb.fetchById(id);
                }
                return omdb.fetchByTitle(title);
            })
            .then(data => database.addMovie(data))
            .then(data => {
                res.json(data);
            })
            .then(next)
            .catch(next);
    };
}

module.exports = getCommentsFactory;

function validate(body) {
    const {id, title} = body;
    if (id && title) {
        throw new Error(`Title AND id given - only one is needed`);
    }
}