'use strict';

const OMDbApiClient = require('./omdb');
const FileDatabase = require('./databases/file');
const getConfig = require('./config');

module.exports.OMDbApiClient = OMDbApiClient;
module.exports.FileDatabase = FileDatabase;
module.exports.getConfig = getConfig;