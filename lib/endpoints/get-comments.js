'use strict';

function getCommentsFactory(app, config) {
    const {database} = config;

    return (req, res, next) => {
        Promise.resolve()
            .then(() => database.listComments())
            .then(data => {
                res.json(data);
            })
            .then(next)
            .catch(next);
    };
}

module.exports = getCommentsFactory;