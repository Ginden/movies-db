'use strict';

function getCommentsFactory(app, config) {
    const {database} = config;

    return (req, res, next) => {
        Promise.resolve()
            .then(() => database.listMovies())
            .then(data => {
                res.json(data);
            })
            .catch(next);
    };
}

module.exports = getCommentsFactory;