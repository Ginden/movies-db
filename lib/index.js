'use strict';

const express = require('express');

const registerRoutes = require('./register-routes');
const { getConfig } = require('./services');

module.exports = async function(port, configFactory = getConfig) {
    const app = express();
    const config = await configFactory();
    await registerRoutes(app, config);
    app.listen(port, (err) => {
        if (err) {
            console.error(err);
            setImmediate(() => {
                throw err;
            });
        }
        console.log(`Listening on http://localhost:${port}/`)
    })
};