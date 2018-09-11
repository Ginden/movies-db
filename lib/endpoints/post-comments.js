'use strict';

const Promise = require('bluebird');

function getCommentsFactory(app, config) {
    const {database} = config;

    return (req, res, next) => {
        const {body, ip} = req;
        Promise.resolve(body)
            .then(userData => Object.assign(userData, {ip}))
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