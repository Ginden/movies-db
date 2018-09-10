'use strict';
const services = require('./index');
function configFactory() {
    return {
        database: new services.FileDatabase,
        omdb: {apiKey: process.env.OMDB_API_KEY}
    };
}

module.exports = configFactory;