'use strict';

const shortResponse = require('./omdb/back-to-the-future');
const longResponse = require('./omdb/back-to-future-full');
const movieNotFound = require('./omdb/movie-not-found');

const omdb = {
    shortResponse,
    longResponse,
    movieNotFound
};

module.exports.omdb = omdb;