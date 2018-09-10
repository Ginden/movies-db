'use strict';

const omdb = {
    shortResponse: require('./omdb/back-to-the-future'),
    longResponse: require('./omdb/back-to-future-full'),
    movieNotFound: require('./omdb/movie-not-found')
};

module.exports.omdb = omdb;